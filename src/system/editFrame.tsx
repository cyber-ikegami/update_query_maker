import React, { useState } from 'react';
import styled from 'styled-components';

const editFrame = ()=> {
  return (
    <_Frame><_Table>
      <_Record>risyunen</_Record>
      <_Record>semekikn</_Record>
      <_Record>kougicd</_Record>
    </_Table></_Frame>
  );
}

export default editFrame;

const _Frame = styled.div`
  background-color: #b9c3eb;
  width: 100%;
  height: 100%;
`;

const _Table = styled.div`
  background-color: #d9dde9;
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
`;

const _Record = styled.div`
  background-color: #7890d8;
  font-size: 15px;
  padding-left: 5px;
  padding-right: 5px;
  display: inline-block;
  height: 20px;
  border: 1px solid #1a1a1a;
`;

const _Column = styled.div`

`;