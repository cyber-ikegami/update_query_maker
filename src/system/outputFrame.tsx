import React, { useState } from 'react';
import styled from 'styled-components';
import { EditBean } from './editBean';

const outputFrame = (props: {
  editBean: EditBean;
  // setEditBean: Function;
})=> {
  const outputList: JSX.Element[] = [];
  for (let i = 0; i < props.editBean.dataTable.length; i++) {
    if (props.editBean.dataTable[i].join('-') !== props.editBean.backupTable[i].join('-')) {
      for (let j = 0; j < props.editBean.columnNames.length; j++) {
        outputList.push(<textarea readOnly>{props.editBean.backupTable[i][j]}</textarea>);
      }
    }
  }
  return (
      <_Frame><textarea value={'a'} readOnly/></_Frame>
  );
}

export default outputFrame;

const _Frame = styled.div`
  background-color: #b9c3eb;
  width: 100%;
  height: 100%;
  & textarea {
    background-color: #dcdcdc;
    resize: none;
    margin-left: 10px;
    margin-top: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    box-sizing: border-box; 
  }
`;
