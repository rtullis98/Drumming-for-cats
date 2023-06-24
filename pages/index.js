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
        <Button variant="dark">Create your own Cat!</Button>
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
