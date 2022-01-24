import React, { useState } from 'react';
import styled from 'styled-components';
import { EditBean } from './editBean';

const editFrame = (props: {
  editBean: EditBean;
})=> {
  const columnNameJsxList: JSX.Element[] = [];
  for(let i = 0; i < props.editBean.columnNames.length; i++){
    columnNameJsxList.push(<_Column>{props.editBean.columnNames[i]}</_Column>);
  }
  return (
    <_Frame><_Table><_Record>
      {columnNameJsxList}
    </_Record></_Table></_Frame>
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
  height: 20px;
  `;

const _Column = styled.div`
  background-color: #7890d8;
  font-size: 15px;
  padding-left: 5px;
  padding-right: 5px;
  display: inline-block;
  border: 1px solid #1a1a1a;
  width: 100px;
  `;