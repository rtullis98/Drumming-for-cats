// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Link from 'next/link';
// import { deleteAppointment } from '../api/appointmentData';

// function AppointmentCard({ appointmentObj, onUpdate }) {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const deleteThisAppointment = () => {
//     if (window.confirm(`Delete ${appointmentObj.apptDateTime}?`)) {
//       deleteAppointment(appointmentObj.firebaseKey).then(() => onUpdate());
//     }
//   };

//   return (
//     <Card
//       style={{
//         width: '18rem',
//         margin: '10px',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div
//         style={{
//           position: 'relative',
//           height: '100%',
//           width: '100%',
//           backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
//           transition: 'background-color 0.3s ease',
//         }}
//       >
//         <Card.Body>
//           <Card.Title>{appointmentObj.apptDateTime}</Card.Title>
//           {/* DYNAMIC LINK TO VIEW THE APPOINTMENT DETAILS */}
//           {isHovered && (
//             <Link href={`/appointment/${appointmentObj.firebaseKey}`} passHref>
//               <Button variant="primary" className="m-2">
//                 VIEW
//               </Button>
//             </Link>
//           )}
//           {/* DYNAMIC LINK TO EDIT THE APPOINTMENT DETAILS */}
//           {isHovered && (
//             <Link href={`/appointment/edit/${appointmentObj.firebaseKey}`} passHref>
//               <Button variant="info">EDIT</Button>
//             </Link>
//           )}
//           {isHovered && (
//             <Button variant="danger" onClick={deleteThisAppointment} className="m-2">
//               DELETE
//             </Button>
//           )}
//         </Card.Body>
//       </div>
//     </Card>
//   );
// }

// AppointmentCard.propTypes = {
//   appointmentObj: PropTypes.shape({
//     apptDateTime: PropTypes.string,
//     cat_id: PropTypes.string,
//     email: PropTypes.string,
//     phone: PropTypes.string,
//     reason: PropTypes.string,
//     firebaseKey: PropTypes.string,
//   }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };

// export default AppointmentCard;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteAppointment } from '../api/appointmentData';

function AppointmentCard({ appointmentObj, onUpdate }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const deleteThisAppointment = () => {
    if (window.confirm(`Delete ${appointmentObj.apptDateTime}?`)) {
      deleteAppointment(appointmentObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card
      style={{
        width: '18rem',
        margin: '10px',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Card.Body>
          <Card.Title>{appointmentObj.apptDateTime}</Card.Title>
          {/* DYNAMIC LINK TO VIEW THE APPOINTMENT DETAILS */}
          {isHovered && (
            <Link href={`/appointment/${appointmentObj.firebaseKey}`} passHref>
              <Button variant="dark" className="m-2">
                VIEW
              </Button>
            </Link>
          )}
          {/* DYNAMIC LINK TO EDIT THE APPOINTMENT DETAILS */}
          {isHovered && (
            <Link href={`/appointment/edit/${appointmentObj.firebaseKey}`} passHref>
              <Button variant="dark">EDIT</Button>
            </Link>
          )}
          {isHovered && (
            <Button variant="dark" onClick={deleteThisAppointment} className="m-2">
              DELETE
            </Button>
          )}
        </Card.Body>
      </div>
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
