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
      <div className="mt-5 cat-container">
        <div className="image-container">
          <img src={catDetails.image} alt={catDetails.name} style={{ width: '300px' }} />
        </div>
        <div className="details-container">
          <h2>
            {catDetails.name}
            {catDetails.isTeacher ? ' 🎓' : ''}
          </h2>
          <h4>
            Email: {catDetails.email}
          </h4>
          <hr />
          <h4>
            Phone: {catDetails.phone}
          </h4>
          <hr />
          <h4>
            Availability: {catDetails.availability}
          </h4>
          <hr />
          <h4>
            Bio: {catDetails.description}
          </h4>
          <hr />
        </div>
      </div>
      <div className="mb-3 appointments-container">
        {catDetails.appointments?.map((appointment) => (
          <AppointmentCard key={appointment.firebaseKey} appointmentObj={appointment} onUpdate={viewCatAndAppointment} />
        ))}
      </div>
    </div>
  );
}
