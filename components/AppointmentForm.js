import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getCats } from '../api/catData';
import { createAppointment, updateAppointment } from '../api/appointmentData';

const initialState = {
  appDateTime: '',
  email: '',
  phone: '',
  reason: '',
};

function AppointmentForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [cats, setCats] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getCats(user.uid).then(setCats);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

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
      updateAppointment(formInput)
        .then(() => router.push(`/appointment/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createAppointment(payload).then(() => {
        router.push('/');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Appointment</h2>

      <FloatingLabel controlId="floatingInput1" label="apptDateTime" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a date/time for your appointment"
          name="Appointment Date and Time"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="email" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter the cat's email that you are meeting with"
          name="email"
          value={formInput.email}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="phone" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter the cat's phone number that you are meeting with"
          name="phone"
          value={formInput.phone}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Cat">
        <Form.Select
          aria-label="Cat"
          name="cat_id"
          onChange={handleChange}
          className="mb-3"
          value={obj.cat_id}
          required
        >
          <option value="">Select a cat to meet with</option>
          {
            cats.map((cat) => (
              <option
                key={cat.firebaseKey}
                value={cat.firebaseKey}
              >
                {cat.name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Reason" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Reason for appointment"
          style={{ height: '100px' }}
          name="reason"
          value={formInput.reason}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Appointment</Button>
    </Form>
  );
}

AppointmentForm.propTypes = {
  obj: PropTypes.shape({
    appDateTime: PropTypes.string,
    reason: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    cat_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

AppointmentForm.defaultProps = {
  obj: initialState,
};

export default AppointmentForm;
