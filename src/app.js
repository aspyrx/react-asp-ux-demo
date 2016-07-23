import React from 'react';
import { render } from 'react-dom';
import { Button, Group, Input } from 'react-asp-ux';

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
            <Group placeholder="placeholder">
                <Input>Text input</Input>
                <Input design="primary">Primary text input</Input>
                <Input design="success">Success text input</Input>
                <Input design="warning">Warning text input</Input>
                <Input design="danger">Danger text input</Input>
                <Input inline>Inline text input</Input>
                <Input inline>Inline text input</Input>
            </Group>
            <Group type="checkbox" name="asp-ux-input-checkbox-example">
                <Input>Checkbox</Input>
                <Input defaultChecked>Checked checkbox</Input>
                <Input inline>Inline checkbox</Input>
                <Input design="primary" inline>Primary checkbox</Input>
                <Input design="success" inline>Success checkbox</Input>
                <Input design="warning" inline>Warning checkbox</Input>
                <Input design="danger" inline >Danger checkbox</Input>
            </Group>
            <Group type="radio" name="asp-ux-input-radio-example">
                <Input>Radio</Input>
                <Input defaultChecked>Checked radio</Input>
                <Input inline>Inline radio</Input>
                <Input design="primary" inline>Primary radio</Input>
                <Input design="success" inline>Success radio</Input>
                <Input design="warning" inline>Warning radio</Input>
                <Input design="danger" inline>Danger radio</Input>
            </Group>
        </div>
    </div>;
}

const bundleLoadedEvent = new Event('appBundleLoaded');
bundleLoadedEvent.renderApp = function renderApp(elem, done) {
    render(<App />, elem, done);
};

window.dispatchEvent(bundleLoadedEvent);

