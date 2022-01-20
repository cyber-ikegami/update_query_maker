import React, { useState } from 'react';
import styled from 'styled-components';

const outputFrame = ()=> {
  return (
      <_Frame></_Frame>
  );
}

export default outputFrame;

const _Frame = styled.div`
  background-color: #97e1ee;
  width: 100%;
  height: 100%;
`;