import React from 'react';
import 'react-asp-ux';

import Demo from './Demo';

export default class Links extends Demo {
    static get demo() {
        return {
            name: "Links",
            content: <ul>
                <li><a href="foo">Link</a></li>
                <li><a href="/">Visited link</a></li>
            </ul>
        };
    }
}

