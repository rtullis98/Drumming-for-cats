import { getSingleCat } from './catData';
import { getSingleAppointment } from './appointmentData';

// VIEW APPOINTMENT DETAILS
const viewAppointmentDetails = (appointmentFirebaseKey) => new Promise((resolve, reject) => {
  getSingleAppointment(appointmentFirebaseKey)
    .then((appointmentObject) => {
      getSingleCat(appointmentObject.cat_id)
        .then((catObject) => {
          resolve({ catObject, ...appointmentObject });
        });
    }).catch((error) => reject(error));
});

// VIEW CAT DETAILS
const viewCatDetails = (catFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleCat(catFirebaseKey)])
    .then(([catObject]) => {
      resolve({ ...catObject });
    }).catch((error) => reject(error));
});

// const deleteCatAppointments = (catId) => new Promise((resolve, reject) => {
//   getCatAppointments(catId).then((appointmentsArray) => {
//     console.warn(appointmentsArray, 'Cat Appointments');
//     const deleteAppointmentPromises = appointmentsArray.map((appointment) => deleteAppointment(appointment.firebaseKey));

//     Promise.all(deleteAppointmentPromises).then(() => {
//       deleteSingleCat(catId).then(resolve);
//     });
//   }).catch((error) => reject(error));
// });

export { viewAppointmentDetails, viewCatDetails };
