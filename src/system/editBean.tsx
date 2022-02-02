import React, { useState } from 'react';
import styled from 'styled-components';

// edit(データ編集)のBean
export type EditBean = {
    // カラム名
    columnNames: string[];
    // バックアップ
    backupTable: string[][];
    // データセット画面で入力された値
    dataTable: string[][];
    // キー項目
    primalyKeys: boolean[];
    // NUMBER
    number: boolean[];
}

// edit(データ編集)のBeanを作成
export const createEditBean = (baseText: string): EditBean => {
    // キー項目
    const primalyKeys: boolean[] = [];
    // NUMBER
    const number: boolean[] = [];
    // データセット画面で入力された値
    const dataTable: string[][] = [];
    // レコード
    const records = baseText.split(/\n/g);
    // カラム名
    const columnNames = records[0].split(/[,\t]/g);

    for (let i = 0; i < columnNames.length; i++) {
        primalyKeys.push(false);
        number.push(false);
    }

    for (let i = 1; i < records.length; i++) {
        const columns = records[i].split(/[,\t]/g);
        if (columns.length === columnNames.length) {
            dataTable.push(columns);
        }
    }

    return {
        columnNames,
        primalyKeys,
        number: number,
        backupTable: JSON.parse(JSON.stringify(dataTable)),
        dataTable
    };
}

