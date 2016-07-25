import React from 'react';
import Lists from './Lists';
import Links from './Links';
import Buttons from './Buttons';
import Inputs from './Inputs';
import Selects from './Selects';

export default [
    Lists, Links, Buttons, Inputs, Selects
].map((el, i) => React.createElement(el, { key: i }));

