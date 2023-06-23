import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleCat } from '../api/catData';

function CatCard({ catObj, onUpdate }) {
  const deleteThisCat = () => {
    if (window.confirm(`Delete ${catObj.name}?`)) {
      deleteSingleCat(catObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={catObj.image} alt={catObj.email} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{catObj.name}</Card.Title>
        <Link href={`/cat/${catObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/cat/edit/${catObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisCat} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

CatCard.propTypes = {
  catObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    availability: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    isTeacher: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CatCard;
