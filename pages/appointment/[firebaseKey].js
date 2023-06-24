// /* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { viewAppointmentDetails } from '../../api/mergedData';

// export default function ViewAppointment() {
//   const [appointmentDetails, setAppointmentDetails] = useState({});
//   const router = useRouter();

//   // TODO: grab firebaseKey from url
//   const { firebaseKey } = router.query;

//   // TODO: make call to API layer to get the data
//   useEffect(() => {
//     viewAppointmentDetails(firebaseKey).then(setAppointmentDetails);
//   }, [firebaseKey]);

//   return (
//     <div className="mt-5 d-flex flex-wrap">
//       <div className="d-flex flex-column">
//         <img src={appointmentDetails.catObject?.image} alt={appointmentDetails.catObject?.apptDateTime} style={{ width: '300px' }} />
//       </div>
//       <div className="text-black ms-5 details">
//         <h3>
//           Your cat is meeting with: {appointmentDetails.catObject?.name} {appointmentDetails.catObject?.isTeacher ? ' 🎓' : ''}
//         </h3>
//         <h6>
//           Appointment Details: {appointmentDetails.apptDateTime}
//         </h6>
//         <h6>
//           Reason for Meeting: {appointmentDetails.reason || ''}
//         </h6>
//         <hr />
//         <h3>
//           Contact {appointmentDetails.catObject?.name}
//         </h3>
//         <h6>
//           Email: {appointmentDetails.catObject?.email}
//         </h6>
//         <h6>
//           Phone: {appointmentDetails.catObject?.phone}
//         </h6>
//         <hr />
//       </div>
//     </div>
//   );
// }
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAppointmentDetails } from '../../api/mergedData';

export default function ViewAppointment() {
  const [appointmentDetails, setAppointmentDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewAppointmentDetails(firebaseKey).then(setAppointmentDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 appointment-container">
      <div className="image-container">
        <img src={appointmentDetails.catObject?.image} alt={appointmentDetails.catObject?.apptDateTime} style={{ width: '300px' }} />
      </div>
      <div className="details-container">
        <h3>
          Your cat is meeting with: {appointmentDetails.catObject?.name} {appointmentDetails.catObject?.isTeacher ? ' 🎓' : ''}
        </h3>
        <h6>
          Appointment Details: {appointmentDetails.apptDateTime}
        </h6>
        <h6>
          Reason for Meeting: {appointmentDetails.reason || ''}
        </h6>
        <hr />
        <h3>
          Contact {appointmentDetails.catObject?.name}
        </h3>
        <h6>
          Email: {appointmentDetails.catObject?.email}
        </h6>
        <h6>
          Phone: {appointmentDetails.catObject?.phone}
        </h6>
        <hr />
      </div>
    </div>
  );
}
