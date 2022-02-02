import React, { useState } from 'react';
import styled from 'styled-components';
import { EditBean } from './editBean';

// output(出力結果)のBean
export type OutputBean = {
    // 出力する値
    outputValue: string;
}

// output(出力結果)のBeanを作成
export const createOutputBean = (editBean: EditBean, tableName: string): OutputBean => {
    // 出力する値
    let outputValue: string = '';
    
    for (let i = 0; i < editBean.dataTable.length; i++) {
        // セルの値に変更があったか
        const isUpdateRecord = editBean.dataTable[i].join('-') !== editBean.backupTable[i].join('-');
        // 更新するカラム名と更新後のセルの値(set句)
        let updateColumn: string = '';
        // キー項目(where句)
        let keyColumn: string = '';
        if (isUpdateRecord) {
            for (let j = 0; j < editBean.columnNames.length; j++) {
                const isSame = editBean.dataTable[i][j] === editBean.backupTable[i][j];
                const isKey =  editBean.primalyKeys[j];
                if(isKey){
                    keyColumn = `${keyColumn}${(keyColumn != '' ? ' and ' : '')}${editBean.columnNames[j]} = '${editBean.backupTable[i][j]}'`;
                } else {
                    if (!isSame) {
                        updateColumn = `${updateColumn}${(updateColumn != '' ? ', ' : '')}${editBean.columnNames[j]} = ${(editBean.number[j] ? '' : '\'')}${editBean.dataTable[i][j]}${(editBean.number[j] ? '' : '\'')}`;
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