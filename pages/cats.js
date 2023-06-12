/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
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
    <div className="d-flex flex-wrap">
      {cats.map((cat) => (
        <CatCard key={cat.firebaseKey} catObj={cat} onUpdate={getAllTheCats} />
      ))}
    </div>
  );
}

export default Cats;
