import React, { useState } from 'react';
import styled from 'styled-components';
import { EditBean } from './editBean';

export type OutputBean = {
    outputValue: string;
}

export const createOutputBean = (editBean: EditBean): OutputBean => {
    let outputValue: string = '';

    outputValue = 'a';

    return {
        outputValue
    };
}