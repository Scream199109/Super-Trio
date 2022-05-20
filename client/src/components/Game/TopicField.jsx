import React from 'react';

function TopicField({ topicName, id }) {
  return (
    <div className="field__topic" id={id}>{topicName}</div>

  );
}

export default TopicField;
