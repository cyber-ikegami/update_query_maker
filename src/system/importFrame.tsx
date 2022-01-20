import React, { useState } from 'react';
import styled from 'styled-components';

const importFrame = ()=> {
  return (
      <_Frame></_Frame>
  );
}

export default importFrame;

const _Frame = styled.div`
  background-color: #f37e7e;
  width: 100%;
  height: 100%;
`;