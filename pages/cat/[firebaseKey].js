/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewCatDetails } from '../../api/mergedData';
import AppointmentCard from '../../components/AppointmentCard';

export default function ViewCats() {
  const [catDetails, setCatDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  const viewCatAndAppointment = () => {
    viewCatDetails(firebaseKey).then(setCatDetails);
  };

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewCatAndAppointment();
  }, []);

  return (
    <div>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={catDetails.image} alt={catDetails.name} style={{ width: '300px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h2>{catDetails.name}
            {catDetails.isTeacher ? ' 🎓' : ''}
          </h2>
          Email: <a href={`mailto:${catDetails.email}`}>{catDetails.email}</a>
          <hr />
        </div>
      </div>
      <div className="mb-3 d-flex flex-wrap">
        {catDetails.appointments?.map((appointment) => (
          <AppointmentCard key={appointment.firebaseKey} appointmentObj={appointment} onUpdate={viewCatAndAppointment} />
        ))}
      </div>
    </div>
  );
}
