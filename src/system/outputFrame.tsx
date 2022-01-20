import React, { useState } from 'react';
import styled from 'styled-components';

const outputFrame = ()=> {
  return (
      <_OutputFrame></_OutputFrame>
  );
}

export default outputFrame;

const _OutputFrame = styled.div`
  background-color: #97e1ee;
  width: 100%;
  height: 100%;
`;