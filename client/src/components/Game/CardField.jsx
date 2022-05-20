import React from 'react';
import Modals from '../Modal/Modals';

function CardField({ card }) {
  return (
    <div className="field__card">
      <Modals card={card} />
    </div>
  );
}

export default CardField;
