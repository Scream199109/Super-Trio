import React from 'react';

function TopicField({ topicName }) {
  console.log("🚀 ~ TopicField ~ topicName", topicName)
  return (
    <div className="field__topic">{topicName}</div>
    // <h2>df</h2>
  );
}

export default TopicField;
