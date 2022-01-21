import React, { useState } from 'react';
import styled from 'styled-components';

const importFrame = (props: {
    value: string;
})=> {
  return (
      <_Frame><textarea></textarea></_Frame>
  );
}

export default importFrame;

const _Frame = styled.div`
  background-color: #f37e7e;
  width: 100%;
  height: 100%;
  & textarea {
    resize:none;
    margin-left: 10px;
    margin-top: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    box-sizing: border-box; 
  }
`;
