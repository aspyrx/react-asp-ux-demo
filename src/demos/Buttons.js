import React from 'react';

import Button from 'react-asp-ux/lib/Button';

export default function Buttons() {
    return <div>
        <h2>Buttons</h2>
        <Button>Button</Button>
        <Button design="primary">Primary button</Button>
        <Button design="success">Success button</Button>
        <Button design="warning">Warning button</Button>
        <Button design="danger">Danger button</Button>
    </div>;
}

