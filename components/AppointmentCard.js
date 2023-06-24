import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteAppointment } from '../api/appointmentData';

function AppointmentCard({ appointmentObj, onUpdate }) {
  const deleteThisAppointment = () => {
    if (window.confirm(`Delete ${appointmentObj.apptDateTime}?`)) {
      deleteAppointment(appointmentObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{appointmentObj.apptDateTime}</Card.Title>
        {/* DYNAMIC LINK TO VIEW THE APPOINTMENT DETAILS  */}
        <Link href={`/appointment/${appointmentObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE APPOINTMENT DETAILS  */}
        <Link href={`/appointment/edit/${appointmentObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisAppointment} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

AppointmentCard.propTypes = {
  appointmentObj: PropTypes.shape({
    apptDateTime: PropTypes.string,
    cat_id: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    reason: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AppointmentCard;
