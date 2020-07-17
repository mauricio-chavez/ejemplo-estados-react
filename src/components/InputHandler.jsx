import React from 'react';

export default function InputHandler(props) {
  return <input type='text' onChange={props.textHandler} />;
}
