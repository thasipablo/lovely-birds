import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBirds } from '../redux/books/birdsSlice';
import BirdSpeccy from './BirdSpeccy';
import birdsIllus from '../assets/birds.png';

const BirdsSpeciesList = () => {
  const dispatch = useDispatch();
  const birdsStore = useSelector((state) => state.bird);
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const birds = birdsStore.birds.filter(
    (bird) => bird.comName.toLowerCase().includes(searchKeyWord.toLowerCase())
      || bird.locName.toLowerCase().includes(searchKeyWord.toLowerCase())
      || bird.howMany === searchKeyWord,
  );

  useEffect(() => {
    dispatch(fetchBirds());
  }, [dispatch]);

  const colors = ['light', 'dark'];
  let ops = 'increment';
  let turn = 0;
  const darkOrLight = () => {
    let color = '';
    if (ops === 'increment') {
      color = colors[turn];
      turn += 1;
      if (turn > 1) {
        turn = 1;
        ops = 'decrement';
      }
    } else {
      color = colors[turn];
      turn -= 1;
      if (turn < 0) {
        turn = 0;
        ops = 'increment';
      }
    }
    return color;
  };

  return (
    <>
      <div className="banner">
        <div className="birds">
          <img src={birdsIllus} alt="birds illustrations" />
        </div>
        <div className="year">2023</div>
        <h2 className="banner-title">Birds Speccies</h2>
        <div>
          <span>Total: </span>
          <span>{birds?.length}</span>
        </div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchKeyWord(e.target.value)}
          className="search-field"
        />
      </div>
      <ul className="home-container">
        {birds?.map((speccy) => (
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
