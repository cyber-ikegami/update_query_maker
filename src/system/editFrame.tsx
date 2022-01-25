import React, { useState } from 'react';
import styled from 'styled-components';
import { EditBean } from './editBean';

const editFrame = (props: {
  editBean: EditBean;
  setEditBean: Function;
}) => {
  const columnNameJsxList: JSX.Element[] = [];
  const primalyKeyList: JSX.Element[] = [];
  for (let i = 0; i < props.editBean.columnNames.length; i++) {
    columnNameJsxList.push(<_Column>{props.editBean.columnNames[i]}</_Column>);
    primalyKeyList.push(<_Check><input type="checkbox" checked={props.editBean.primalyKeys[i]} onChange={(e)=>{
      props.editBean.primalyKeys[i] = e.target.checked;
      props.setEditBean({...props.editBean}); 
    }} /> </_Check>);
  }
  
  const recordJsxList: JSX.Element[] = [];
  for (let j = 0; j < props.editBean.dataTable.length; j++) {
    const dataNameJsxList: JSX.Element[] = [];
    for (let k = 0; k < props.editBean.columnNames.length; k++) {
      const isKey =  props.editBean.primalyKeys[k];
      if(isKey){
        dataNameJsxList.push(<_Data><b>{props.editBean.dataTable[j][k]}</b></_Data>);
      } else {
        const isSame =  props.editBean.dataTable[j][k] === props.editBean.backupTable[j][k];
        dataNameJsxList.push(<_Text isSame={isSame}><input type="text" value={props.editBean.dataTable[j][k]} onChange={(e)=>{
          props.editBean.dataTable[j][k] = e.target.value;
          props.setEditBean({...props.editBean}); 
        }} /> </_Text>);
      }
    }
    recordJsxList.push(<_Record>{dataNameJsxList}</_Record>);
  }

  return (
    <_Frame><_Table>
      <_Record>
        {columnNameJsxList}
      </_Record>
      <_Record>
        {primalyKeyList}
      </_Record>
        {recordJsxList}
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
  white-space: nowrap;
  overflow: scroll;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
`;

const _Record = styled.div`
  display: block;
  height: 24px;
`;

const _Column = styled.div`
  background-color: #7890d8;
  font-size: 15px;
  padding-left: 5px;
  padding-right: 5px;
  display: inline-block;
  border: 1px solid #1a1a1a;
  width: 100px;
  height: 100%;
`;

const _Check = styled.div`
  background-color: #78d8c6;
  display: inline-block;
  border: 1px solid #1a1a1a;
  padding-left: 5px;
  padding-right: 5px;
  width: 100px;
  height: 100%;
`;

const _Data = styled.div`
  background-color: #ffef78;
  color: #264ec9;
  font-size: 15px;
  padding-left: 5px;
  padding-right: 5px;
  display: inline-block;
  border: 1px solid #1a1a1a;
  width: 100px;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

const _Text = styled.div<{
  isSame: boolean;
}>`
  display: inline-block;
  border: 1px solid #1a1a1a;
  width: 110px;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  & input {
    color: ${props => props.isSame?'#000000':'#ff3333'};
    font-size: 15px;
    width: 110px;
    height: 100%;
  }
`;