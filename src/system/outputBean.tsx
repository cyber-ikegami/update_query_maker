import React, { useState } from 'react';
import styled from 'styled-components';
import { EditBean } from './editBean';

export type OutputBean = {
    outputValue: string;
}

export const createOutputBean = (editBean: EditBean, tableName: string): OutputBean => {
    let outputValue: string = '';
    
    for (let i = 0; i < editBean.dataTable.length; i++) {
        const isUpdateRecord = editBean.dataTable[i].join('-') !== editBean.backupTable[i].join('-');
        let updateColumn: string = '';
        let keyColumn: string = '';
        if (isUpdateRecord) {
            for (let j = 0; j < editBean.columnNames.length; j++) {
                const isSame = editBean.dataTable[i][j] === editBean.backupTable[i][j];
                const isKey =  editBean.primalyKeys[j];
                if(isKey){
                    keyColumn = `${keyColumn}${(keyColumn != '' ? ', ' : '')}${editBean.columnNames[j]} = '${editBean.dataTable[i][j]}'`;
                } else {
                    if (!isSame) {
                        updateColumn = `${updateColumn}${(updateColumn != '' ? ', ' : '')}${editBean.columnNames[j]} = '${editBean.dataTable[i][j]}'`;
                    }
                }
            }
            outputValue = `${outputValue}update ${tableName} set ${updateColumn} where ${keyColumn};\n`;
        }
    }

    return {
        outputValue
    };
}