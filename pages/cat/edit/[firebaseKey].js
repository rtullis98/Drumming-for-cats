import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCat } from '../../../api/catData';
import CatForm from '../../../components/CatForm';

export default function EditCat() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the appointment data
  useEffect(() => {
    getSingleCat(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<CatForm obj={editItem} />);
}
