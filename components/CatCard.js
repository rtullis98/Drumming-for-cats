import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleCat } from '../api/catData';

function CatCard({ catObj, onUpdate }) {
  const [isHovered, setIsHovered] = useState(false);

  const deleteThisCat = () => {
    if (window.confirm(`Delete ${catObj.name}?`)) {
      deleteSingleCat(catObj.firebaseKey).then(() => onUpdate());
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      style={{ width: '18rem', margin: '10px', overflow: 'hidden' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        <div
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <Card.Img
            variant="top"
            src={catObj.image}
            alt={catObj.email}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.3s ease',
              opacity: isHovered ? '0.5' : '1',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              height: '100%',
              width: '100%',
              backgroundColor: 'black',
              opacity: isHovered ? '0.5' : '0',
              transition: 'opacity 0.3s ease',
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            padding: '10px',
            opacity: isHovered ? '1' : '0',
            transition: 'opacity 0.3s ease',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <Card.Title style={{ color: 'white' }}>{catObj.name}</Card.Title>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: isHovered ? '1' : '0',
            transition: 'opacity 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Link href={`/cat/${catObj.firebaseKey}`} passHref>
            <Button variant="dark" className="m-2">
              VIEW
            </Button>
          </Link>
          <Link href={`/cat/edit/${catObj.firebaseKey}`} passHref>
            <Button variant="dark">
              EDIT
            </Button>
          </Link>
          <Button variant="dark" onClick={deleteThisCat} className="m-2">
            DELETE
          </Button>
        </div>
      </div>
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
