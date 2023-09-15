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

  const colors = ['light', 'dark'];
  let ops = 'increment';
  let round = 0;
  const darkOrLight = () => {
    let color = '';
    if (ops === 'increment') {
      color = colors[round];
      round += 1;
      if (round > 1) {
        round = 1;
        ops = 'decrement';
      }
    } else {
      color = colors[round];
      round -= 1;
      if (round < 0) {
        round = 0;
        ops = 'increment';
      }
    }
    return color;
  };

  return (
    <>
      <div className="banner">
        <div className="year">2023</div>
        <h2 className="banner-title">Birds Speccies</h2>
        <div>
          <span>Total:</span>
          <span>{birdsStore.birds?.length}</span>
        </div>
      </div>
      <ul className="home-container">
        {birdsStore.birds.map((speccy) => (
          <li key={speccy.speciesCode} className={darkOrLight() ?? ''}>
            <Link to={`/details/${speccy.speciesCode}`}>
              <BirdSpeccy speccy={speccy} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BirdsSpeciesList;
