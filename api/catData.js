import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL CATS
const getCats = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cats.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// CREATE CAT
const createCat = (catObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/cats.json`, catObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/cats/${response.data.name}.json`, payload)
        .then(resolve);
    }).catch(reject);
});

// GET SINGLE CAT
const getSingleCat = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cats/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// DELETE CAT
const deleteSingleCat = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/cats/${firebaseKey}.json`)
    .then(() => resolve('deleted'))
    .catch((error) => reject(error));
});

// UPDATE CAT
const updateCat = (catObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/cats/${catObj.firebaseKey}.json`, catObj)
    .then(resolve)
    .catch(reject);
});

// GET A SINGLE CATS'S APPOINTMENTS
const getCatAppointments = (catFirebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/appointments.json?orderBy="author_id"&equalTo="${catFirebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applications/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET TEACHER CATS
const getTeacherCat = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/cats.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const favorites = Object.values(data).filter((item) => item.favorite);
      resolve(favorites);
    })
    .catch(reject);
});

export {
  getCats,
  createCat,
  getSingleCat,
  deleteSingleCat,
  updateCat,
  getCatAppointments,
  getTeacherCat,
};
