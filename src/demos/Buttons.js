import React from 'react';
import Button from 'react-asp-ux/lib/Button';

import Demo from './Demo';

export default class Buttons extends Demo {
    static get demo() {
        return {
            name: "Buttons",
            content: <div>
                <Button>Button</Button>
                <Button design="primary">Primary button</Button>
                <Button design="success">Success button</Button>
                <Button design="warning">Warning button</Button>
                <Button design="danger">Danger button</Button>
            </div>
        };
    }
}

