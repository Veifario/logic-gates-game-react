import React, { useEffect } from 'react'
import Map from './Map'
import CardList from './Map/CardList'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { exactUser, request, requestError } from '../../redux/actions';
import { getById } from '../../api/getRequest';

const TreePage = () => {
  const status = useSelector((state) => state.progress.loadingStatus);
  const progress = useSelector((state) => state.progress.exactUser);
  const dispatch = useDispatch();


  const params = useParams();

  const fetchCards = async () => {
    try {
      dispatch(request());
      const data = await getById(params.id);
      dispatch(exactUser(data));
    } catch (error) {
      dispatch(requestError(error));
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  console.log(progress.lvls);
  
  return (
    <div>
        <Map/>
        {}
    </div>
  )
}

export default TreePage