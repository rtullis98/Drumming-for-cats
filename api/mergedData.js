import { getCatAppointments, getSingleCat, deleteSingleCat } from './catData';
import { getSingleAppointment, deleteAppointment } from './appointmentData';

const viewAppointmentDetails = (appointmentFirebaseKey) => new Promise((resolve, reject) => {
  getSingleAppointment(appointmentFirebaseKey)
    .then((appointmentObject) => {
      getSingleCat(appointmentObject.cat_id)
        .then((catObject) => {
          resolve({ catObject, ...appointmentObject });
        });
    }).catch((error) => reject(error));
});

const viewCatDetails = (catFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleCat(catFirebaseKey), getCatAppointments(catFirebaseKey)])
    .then(([catObject, catAppointmentsArray]) => {
      resolve({ ...catObject, appointments: catAppointmentsArray });
    }).catch((error) => reject(error));
});

const deleteCatAppointments = (catId) => new Promise((resolve, reject) => {
  getCatAppointments(catId).then((appointmentsArray) => {
    console.warn(appointmentsArray, 'Cat Appointments');
    const deleteAppointmentPromises = appointmentsArray.map((appointment) => deleteAppointment(appointment.firebaseKey));

    Promise.all(deleteAppointmentPromises).then(() => {
      deleteSingleCat(catId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewAppointmentDetails, viewCatDetails, deleteCatAppointments };
