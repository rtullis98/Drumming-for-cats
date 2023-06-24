// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../utils/context/authContext';
// import CatCard from '../components/CatCard';
// // eslint-disable-next-line import/named
// import { getTeacherCat } from '../api/catData';

// function TeacherCat() {
//   const { user } = useAuth();
//   const [teacherCat, setTeacherCat] = useState([]);

//   const getAllTeacherCats = () => {
//     getTeacherCat(user.uid).then(setTeacherCat);
//   };

//   useEffect(() => {
//     getAllTeacherCats();
//   }, []);

//   return (
//     <div>{teacherCat.map((cat) => (
//       <CatCard key={cat.firebaseKey} catObj={cat} onUpdate={getAllTeacherCats} />
//     ))}
//     </div>
//   );
// }

// export default TeacherCat;
import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import CatCard from '../components/CatCard';
// eslint-disable-next-line import/named
import { getTeacherCat } from '../api/catData';

function TeacherCat() {
  const { user } = useAuth();
  const [teacherCat, setTeacherCat] = useState([]);

  const getAllTeacherCats = () => {
    getTeacherCat(user.uid).then(setTeacherCat);
  };

  useEffect(() => {
    getAllTeacherCats();
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {teacherCat.map((cat) => (
        <CatCard key={cat.firebaseKey} catObj={cat} onUpdate={getAllTeacherCats} />
      ))}
    </div>
  );
}

export default TeacherCat;
