import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchBirds } from '../redux/books/birdsSlice';

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const birdSpecies = useSelector((state) => state.bird.birds);
  const speccy = birdSpecies.find((b) => b.speciesCode === id);
  console.log(speccy);

  useEffect(() => {
    dispatch(fetchBirds());
  }, [dispatch]);

  return (
    <div>
      <h1>Bird Details Page</h1>
      {speccy && <div>{speccy.comName}</div>}
    </div>
  );
};

export default DetailsPage;
