import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import TopicField from './TopicField';
import CardField from './CardField';
import AllCards from './AllCards';
function Game(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    const res = fetch('/topic', {})
      .then(res => res.json())
      .then(data => dispatch({ type: 'ADD_ALL_TOPIC', payload: data }))
  }, [])

  const { game } = useSelector(store => store.game)
  const { allTopic } = game

  return (
    <div className="container">
      <div className="field">
        <div className="field__topic-raw">
          {allTopic?.map(topic => <TopicField key={topic.id} topicName={topic.name} id={topic.id} />)}
        </div>
        <div className="field__card-raw">
          {/* {allTopic?.map(card => card.Cards.filter(el => el.id === 1).map(elem => <CardField key={elem.id} price={elem.price} />))} */}
          <AllCards />
        </div>
      </div>
    </div>
  );
}

export default Game;
