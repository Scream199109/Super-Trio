import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardField from './CardField';

function AllCards(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    const res = fetch('/cards', {})
      .then(res => res.json())
      .then(data => dispatch({ type: 'ADD_ALL_CARD', payload: data }))
  }, [])
  const { game } = useSelector(state => state.game)
  const { allCards } = game

  return (
    <div className="field__raw">
      {allCards?.map(card => card.Cards.filter(el => el.id === 1).map(elem => <CardField key={elem.id} price={elem.price} />))}
    </div>
  );
}

export default AllCards;
