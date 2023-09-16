import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchBirds } from '../redux/birds/birdsSlice';
import birdsIllus from '../assets/birds.png';
import Navigation from '../components/Navigation';

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const birdSpecies = useSelector((state) => state.bird.birds);
  const speccy = birdSpecies.find((b) => b.speciesCode === id);

  useEffect(() => {
    dispatch(fetchBirds());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      {speccy && (
        <div className="details-page">
          <h1 className="details-title">{speccy.comName}</h1>
          <ul className="details-props">
            <li>
              Count
              <div className="prop">{speccy.howMany}</div>
            </li>
            <li>
              Location
              <div className="prop">{speccy.locName}</div>
            </li>
            <li>
              Scientific Name
              <div className="prop">{speccy.sciName}</div>
            </li>
            <li>
              Observation Date
              <div className="prop">{speccy.obsDt}</div>
            </li>
          </ul>
          <div className="birds">
            <img src={birdsIllus} alt="birds illustrations" />
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
