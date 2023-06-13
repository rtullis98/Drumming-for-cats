/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
// import { getAppointments } from '../api/appointmentData';
// import { useAuth } from '../utils/context/authContext';
// import AppointmentCard from '../components/AppointmentCard';

// function Appointments() {
//   // TODO: Set a state for appointments
//   const [appointments, setAppointments] = useState([]);

//   // TODO: Get user ID using useAuth Hook
//   const { user } = useAuth();

//   // TODO: create a function that makes the API call to get all the appointments
//   const getAllTheAppointments = () => {
//     getAppointments(user.uid).then(setAppointments);
//   };

//   // TODO: make the call to the API to get all the appointments on component render
//   useEffect(() => {
//     getAllTheAppointments();
//   }, []);

//   return (
//     <div className="text-center my-4">
//       <Link href="/appointment/new" passHref>
//         <Button>Create An Appointment</Button>
//       </Link>
//       <div className="d-flex flex-wrap">
//         {/* TODO: map over appointments here using AppointmentCard component */}
//         {appointments.map((appointment) => (
//           <AppointmentCard key={appointment.firebaseKey} appointmentObj={appointment} onUpdate={getAllTheAppointments} />
//         ))}
//       </div>

//     </div>
//   );
// }

// export default Appointments;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getCats } from '../api/catData';
import { useAuth } from '../utils/context/authContext';
import CatCard from '../components/CatCard';

function Cats() {
  const [cats, setCats] = useState([]);

  const { user } = useAuth();

  const getAllTheCats = () => {
    getCats(user.uid).then(setCats);
  };

  useEffect(() => {
    getAllTheCats();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/cat/new" passHref>
        <Button variant="dark">Add A Cat</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {cats.map((cat) => (
          <CatCard key={cat.firebaseKey} catObj={cat} onUpdate={getAllTheCats} />
        ))}
      </div>
    </div>
  );
}

export default Cats;
