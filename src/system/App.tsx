import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <>
      <_Header></_Header>
      <_Body></_Body>
      <_Footer></_Footer>
    </>
  );
}

export default App;

const _Test = styled.div`
  color: #000;
  font-size: 30px;
  font-weight: 600;
`;

const _Header= styled.div`
  background-color: #ce97ee;
  width: 100%;
  height: 100px;
`;

const _Body= styled.div`
  background-color: #97e1ee;
  width: 100%;
  height: calc(100% - 150px);
`;

const _Footer= styled.div`
  background-color: #ce97ee;
  width: 100%;
  height: 50px;
`;