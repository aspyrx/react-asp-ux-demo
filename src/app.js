import React from 'react';
import { render } from 'react-dom';
import { Button, Input } from 'react-asp-ux';

import styles from './app.less';

function App() {
    return <div className={styles.app}>
        <h1>react-asp-ux demo</h1>
        <div>
            <h2>Button</h2>
            <Button>Button</Button>
            <Button design="primary">Primary button</Button>
            <Button design="success">Success button</Button>
            <Button design="warning">Warning button</Button>
            <Button design="danger">Danger button</Button>
        </div>
        <div>
            <h2>Input</h2>
            <Input placeholder="placeholder">Text input</Input>
            <Input design="primary" placeholder="placeholder">Primary text input</Input>
            <Input design="success" placeholder="placeholder">Success text input</Input>
            <Input design="warning" placeholder="placeholder">Warning text input</Input>
            <Input design="danger" placeholder="placeholder">Danger text input</Input>
            <Input placeholder="placeholder" inline>Inline text input</Input>
            <Input placeholder="placeholder" inline>Inline text input</Input>
            <Input type="checkbox">Checkbox</Input>
            <Input type="checkbox" defaultChecked>Checked checkbox</Input>
            <Input type="checkbox" inline>Inline checkbox</Input>
            <Input type="checkbox" design="primary" inline>Primary checkbox</Input>
            <Input type="checkbox" design="success" inline>Success checkbox</Input>
            <Input type="checkbox" design="warning" inline>Warning checkbox</Input>
            <Input type="checkbox" design="danger" inline >Danger checkbox</Input>
            <Input.Group name="asp-ux-input-radio-example">
                <Input type="radio">Radio</Input>
                <Input type="radio" defaultChecked>Checked radio</Input>
                <Input type="radio" inline>Inline radio</Input>
                <Input type="radio" design="primary" inline>Primary radio</Input>
                <Input type="radio" design="success" inline>Success radio</Input>
                <Input type="radio" design="warning" inline>Warning radio</Input>
                <Input type="radio" design="danger" inline>Danger radio</Input>
            </Input.Group>
        </div>
    </div>;
}

const bundleLoadedEvent = new Event('appBundleLoaded');
bundleLoadedEvent.renderApp = function renderApp(elem, done) {
    render(<App />, elem, done);
};

window.dispatchEvent(bundleLoadedEvent);

