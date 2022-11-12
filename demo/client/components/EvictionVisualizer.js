import React, { useState, useEffect } from 'react';

const EvictionVisualizer = () => {
  const [queueData, setQueueData] = useState({});

  useEffect(() => {
    setQueueData;
  }, [queueData]);

  return (
    <div>
      <p>Hi</p>
    </div>
  );
};

export default EvictionVisualizer;
