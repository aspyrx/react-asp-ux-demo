import React from 'react';
import 'react-asp-ux';

import Demo from './Demo';

export default class Lists extends Demo {
    static get demo() {
        return {
            name: "Lists",
            content: <div>
                <ol>
                    <li>Ordered</li>
                    <li>Ordered</li>
                    <li>Ordered</li>
                </ol>
                <ul>
                    <li>Unordered</li>
                    <li>Unordered</li>
                    <li>Unordered</li>
                </ul>
            </div>
        };
    }
}

