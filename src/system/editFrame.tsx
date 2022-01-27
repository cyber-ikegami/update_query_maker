import React, { useState } from 'react';
import styled from 'styled-components';
import { EditBean } from './editBean';

const editFrame = (props: {
  editBean: EditBean;
  setEditBean: Function;
  tableName: string;
  setTableName: Function;
}) => {
  const isInput = props.tableName !== '';
  
  const columnNameJsxList: JSX.Element[] = [];
  const primalyKeyList: JSX.Element[] = [];
  for (let i = 0; i < props.editBean.columnNames.length; i++) {
    let isClick = props.editBean.primalyKeys[i];
    columnNameJsxList.push(<_Column>{props.editBean.columnNames[i]}</_Column>);
    primalyKeyList.push(<_Key isClick={isClick} onClick={() => {
      isClick = !isClick;
      props.editBean.primalyKeys[i] = isClick;
      props.setEditBean({...props.editBean}); 
    }} ><b>KEY</b></_Key>);
  }
  
  const recordJsxList: JSX.Element[] = [];
  for (let j = 0; j < props.editBean.dataTable.length; j++) {
    const dataNameJsxList: JSX.Element[] = [];

    const isUpdateRecord = props.editBean.dataTable[j].join('-') !== props.editBean.backupTable[j].join('-');

    for (let k = 0; k < props.editBean.columnNames.length; k++) {
      const isKey =  props.editBean.primalyKeys[k];
      if(isKey){
        dataNameJsxList.push(<_Data><b>{props.editBean.backupTable[j][k]}</b></_Data>);
      } else {
        const isSame = props.editBean.dataTable[j][k] === props.editBean.backupTable[j][k];

        dataNameJsxList.push(<_Text isSame={isSame} isUpdateRecord={isUpdateRecord}><input type="text" value={props.editBean.dataTable[j][k]} onChange={(e)=>{
          props.editBean.dataTable[j][k] = e.target.value;
          props.setEditBean({...props.editBean}); 
        }} /> </_Text>);
      }
    }
    recordJsxList.push(<_Record>{dataNameJsxList}</_Record>);
  }

  return (
    <_Frame>
      <_Name isInput={isInput}><span>■テーブル名</span><textarea value={props.tableName} onChange={(e)=>{
        props.setTableName(e.target.value);
      }}/></_Name>
      <_Table>
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

const _Name = styled.div<{
  isInput: boolean;
}>`
  background-color: #b9c3eb;
  display: inline-block;
  width: 100%;
  height: 50px;
  & textarea {
    background-color: ${props => props.isInput?'#ffffff':'#ebff33'};
    resize:none;
    margin-left: 10px;
    margin-bottom: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 30px);
    box-sizing: border-box; 
  }
  & span {
    font-size: 15px;
  }
`;

const _Table = styled.div`
  background-color: #d9dde9;
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
  white-space: nowrap;
  overflow: scroll;
  width: calc(100% - 20px);
  height: calc(100% - 70px);
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

const _Key = styled.div<{
  isClick: boolean;
}>`
  background-color: ${props => props.isClick?'#78d8c6':'#9dafac'};
  color: ${props => props.isClick?'#264ec9':'#807e7e'};
  text-align: center; 
  font-size: 15px;
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
  isUpdateRecord: boolean;
}>`
  display: inline-block;
  border: 1px solid #1a1a1a;
  width: 110px;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  & input {
    color: ${props => props.isSame?'#000000':'#ff3333'};
    background-color: ${props => props.isUpdateRecord? '#b5e8ee':'#ffffff'};
    font-size: 15px;
    width: 110px;
    height: 100%;
  }
`;