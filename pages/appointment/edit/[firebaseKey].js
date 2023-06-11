import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleAppointment } from '../../../api/appointmentData';
import AppointmentForm from '../../../components/AppointmentForm';

export default function EditAppointment() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the appointment data
  useEffect(() => {
    getSingleAppointment(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<AppointmentForm obj={editItem} />);
}
