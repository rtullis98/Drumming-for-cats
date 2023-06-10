import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET APPOINTMENTS
const getAppointments = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/appointments.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// DELETE APPOINTMENT
const deleteAppointment = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/appointments/${firebaseKey}.json`)
    .then(() => resolve('deleted'))
    .catch((error) => reject(error));
});

// GET SINGLE APPOINTMENT
const getSingleAppointment = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/appointments/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// CREATE APPOINTMENT
const createAppointment = (appointmentObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/appointments.json`, appointmentObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/appointments/${response.data.name}.json`, payload)
        .then(resolve);
    }).catch(reject);
});

// UPDATE APPOINTMENT
const updateAppointment = (appointmentObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/appointments/${appointmentObj.firebaseKey}.json`, appointmentObj)
    .then(resolve)
    .catch(reject);
});

export {
  getAppointments,
  createAppointment,
  deleteAppointment,
  getSingleAppointment,
  updateAppointment,
};
