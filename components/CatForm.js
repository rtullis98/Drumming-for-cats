import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';
import { createCat, updateCat } from '../api/catData';

const initialState = {
  name: '',
  email: '',
  phone: '',
  isTeacher: false,
  availability: '',
  description: '',
  image: '',
};

export default function CatForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      const updatedCats = {
        ...formInput, firebaseKey: obj.firebaseKey,
      };
      updateCat(updatedCats)
        .then(() => router.push(`/cat/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createCat(payload).then(() => {
        router.push('/');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Cat</h2>
      <FloatingLabel controlId="floatingInput1" label="Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter your cat's name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Phone" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter your cat's phone number"
          name="phone"
          value={formInput.phone}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="Email" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter cat's email address"
          name="email"
          value={formInput.email}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="teacher"
        name="teacher"
        label="Teacher"
        checked={formInput.isTeacher}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            favorite: e.target.checked,
          }));
        }}
      />

      <Button variant="primary" type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Cat
      </Button>
    </Form>

  );
}

CatForm.propTypes = {
  obj: PropTypes.shape({
    email: PropTypes.string,
    isTeacher: PropTypes.bool,
    name: PropTypes.string,
    phone: PropTypes.string,
    availability: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

CatForm.defaultProps = {
  obj: initialState,
};
