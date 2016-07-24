import React from 'react';
import Input from 'react-asp-ux/lib/Input';
import Group from 'react-asp-ux/lib/Group';

export default function Inputs() {
    return <div>
        <h2>Inputs</h2>
        <h3>Text</h3>
        <Group placeholder="placeholder">
            <Input>Text input</Input>
            <Input design="primary">Primary text input</Input>
            <Input design="success">Success text input</Input>
            <Input design="warning">Warning text input</Input>
            <Input design="danger">Danger text input</Input>
            <Input inline>Inline text input</Input>
            <Input inline>Inline text input</Input>
        </Group>
        <h3>Checkbox</h3>
        <Group type="checkbox" name="asp-ux-input-checkbox-example">
            <Input>Checkbox</Input>
            <Input defaultChecked>Checked checkbox</Input>
            <Input inline>Inline checkbox</Input>
            <Input design="primary" inline>Primary checkbox</Input>
            <Input design="success" inline>Success checkbox</Input>
            <Input design="warning" inline>Warning checkbox</Input>
            <Input design="danger" inline >Danger checkbox</Input>
        </Group>
        <h3>Radio</h3>
        <Group type="radio" name="asp-ux-input-radio-example">
            <Input>Radio</Input>
            <Input defaultChecked>Checked radio</Input>
            <Input inline>Inline radio</Input>
            <Input design="primary" inline>Primary radio</Input>
            <Input design="success" inline>Success radio</Input>
            <Input design="warning" inline>Warning radio</Input>
            <Input design="danger" inline>Danger radio</Input>
        </Group>
    </div>;
}

