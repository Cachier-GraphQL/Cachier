import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import LLNode from './LLNode';
import { Typography } from '@mui/material';
import '../styles/QueueVisualizer.css';
import RemovedLLNode from './RemovedLLNode';

const QueueVisualizer = (props) => {
  const { queue } = props;

  const traverse = (list) => {
    let count = 4 - props.currGroupSize;
    const output = [];
    let index = 0;
    while (index < list.length) {
      if (index < count) {
        output.push(
          <LLNode
            key={list[index].key}
            num={list[index].num}
            latency={list[index].latency}
            color='white'
          />
        );
      } else {
        output.push(
          <LLNode
            key={list[index].key}
            num={list[index].num}
            latency={list[index].latency}
            color='red'
          />
        );
      }
      index++;
    }
    return output;
  };

  return (
    <div
      className='Eviction'
      style={{
        margin: 'auto',
        maxWidth: 1200,
        marginTop: 40,
        border: 'black 1px solid',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'white',
        paddingBottom: 40,
        color: '#121F4E',
        boxShadow: 24,
      }}
    >
      <Typography
        variant='h3'
        sx={{ fontFamily: 'Georgia, serif', padding: 2 }}
      >
        Eviction Policy Visualizer
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className='queueContainer'>{traverse(queue)}</div>
        <div className='Evicted'>
          <h2>Last Evicted</h2>
          {props.removedNode && (
            <RemovedLLNode
              num={props.removedNode.num}
              latency={props.removedNode.latency}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QueueVisualizer;