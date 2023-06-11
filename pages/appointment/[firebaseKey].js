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
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={appointmentDetails.cat_id} alt={appointmentDetails.apptDateTime} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {appointmentDetails.apptDateTime} by {appointmentDetails.catObject?.name}
          {appointmentDetails.catObject?.isTeacher ? ' 🎓' : ''}
        </h5>
        Cat Email: <a href={`mailto:${appointmentDetails.catObject?.email}`}>{appointmentDetails.catObject?.email}</a>
        <p>{appointmentDetails.description || ''}</p>
        <hr />
      </div>
    </div>
  );
}
