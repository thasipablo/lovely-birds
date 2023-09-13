import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBirds } from '../redux/books/birdsSlice';
import BirdSpeccy from './BirdSpeccy';

const BirdsSpeciesList = () => {
  const dispatch = useDispatch();
  const birdsStore = useSelector((state) => state.bird);

  useEffect(() => {
    dispatch(fetchBirds());
  }, [dispatch]);

  return (
    <div>
      {birdsStore.birds.map((speccy) => (
        <Link to="/" key={speccy.speciesCode}>
          <BirdSpeccy speccy={speccy} />
        </Link>
      ))}
    </div>
  );
};

export default BirdsSpeciesList;
