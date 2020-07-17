import React from 'react';

export default function Checkboxes({ checkboxesHandler }) {
  const primeroChecked = e => {
    checkboxesHandler('primero', e.target.checked);
  };

  return (
    <div>
      <p>
        <label>Primero</label>
        <input type='checkbox' onClick={primeroChecked} />
      </p>
      <p>
        <label>Segundo</label>
        <input
          type='checkbox'
          onClick={e => {
            checkboxesHandler('segundo', e.target.checked);
          }}
        />
      </p>
    </div>
  );
}
