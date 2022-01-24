import React, { useState } from 'react';
import styled from 'styled-components';

const createEditBean = (props: {
    baseText: string;
})=> {
  return (
    props.baseText.split(/\n/g)[0].split(/[,\t]/g)
  );
}

export default createEditBean;

export type EditBean = {
    columnNames: string[];
}

