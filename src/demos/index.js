import React from 'react';
import Links from './Links';
import Buttons from './Buttons';
import Inputs from './Inputs';

export default [
    Links, Buttons, Inputs
].map((el, i) => React.createElement(el, { key: i }));

