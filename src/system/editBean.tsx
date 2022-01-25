import React, { useState } from 'react';
import styled from 'styled-components';

export type EditBean = {
    columnNames: string[];
    backupTable: string[][];
    dataTable: string[][];
    primalyKeys: boolean[];
}

export const createEditBean = (baseText: string): EditBean => {
    const primalyKeys: boolean[] = [];
    const dataTable: string[][] = [];
    const records = baseText.split(/\n/g); 
    const columnNames = records[0].split(/[,\t]/g);

    for(let i = 0; i < columnNames.length; i++) {
        primalyKeys.push(false);
    }

    for(let i = 1; i < records.length; i++){
        const columns = records[i].split(/[,\t]/g);
        if(columns.length === columnNames.length){
            dataTable.push(columns);
        }
    }

    return {
        columnNames,
        primalyKeys,
        backupTable: JSON.parse(JSON.stringify(dataTable)),
        dataTable
    };
}

