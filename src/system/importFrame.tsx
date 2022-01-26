import React, { useState } from 'react';
import styled from 'styled-components';

const importFrame = (props: {
    baseText: string;
    setBaseText: Function;
})=> {
  return (
      <_Frame><textarea value={props.baseText} onChange={(e)=>{
        props.setBaseText(e.target.value);
      }}/></_Frame>
  );
}

export default importFrame;

const _Frame = styled.div`
  background-color: #b9c3eb;
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


