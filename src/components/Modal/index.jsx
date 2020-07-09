import React from 'react';

export default function Modal({ hideModal }) {
  return (
    <div style={{
      backgroundColor: '#0E0A14ef',
      width: '100%',
      height: '100%',
      top: '0',
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: '600ms',
    }}
    >
      <div style={{
        backgroundColor: 'white', padding: '30px 50px', display: 'flex', flexDirection: 'column',
      }}
      >
        <h1 style={{ paddingBottom: '20px' }}>Parabéns!</h1>
        <p style={{ paddingBottom: '20px' }}>Compra Realizada</p>
        <button onClick={() => hideModal()}>Fechar</button>
      </div>

    </div>
  );
}
