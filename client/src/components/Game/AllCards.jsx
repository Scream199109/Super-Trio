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
  const { card } = useSelector(state => state.card)
  console.log("🚀 ~ AllCards ~ card", card)
  const { allCard } = card
  console.log("🚀 ~ AllCards ~ allCards", allCard)

  return (
    <>
      <div className="field__raw">
        {allCard?.filter(el => el.topic_id === 1).map((elem => <CardField key={elem.id} card={elem} />))}
      </div>
      <div className="field__raw">
        {allCard?.filter(el => el.topic_id === 2).map((elem => <CardField key={elem.id} card={elem} />))}
      </div>
      <div className="field__raw">
        {allCard?.filter(el => el.topic_id === 3).map((elem => <CardField key={elem.id} card={elem} />))}
      </div>
      <div className="field__raw">
        {allCard?.filter(el => el.topic_id === 4).map((elem => <CardField key={elem.id} card={elem} />))}
      </div>
    </>

  );
}

export default AllCards;
