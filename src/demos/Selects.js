import React from 'react';

import Select from 'react-asp-ux/lib/Select';
import Group from 'react-asp-ux/lib/Group';

export default function Selects() {
    return <div>
        <h2>Selects</h2>
        <Select>
            <option>Example</option>
            <option value="123">Foo</option>
            <optgroup label="Group example">
                <option>Bar</option>
                <option value="456">Baz</option>
            </optgroup>
        </Select>
        <Group inline>
            <Select>
                <option>Inline</option>
                <option value="123">Foo</option>
                <optgroup label="Group example">
                    <option>Bar</option>
                    <option value="456">Baz</option>
                </optgroup>
            </Select>
            <Select design="primary">
                <option>Primary</option>
                <option value="123">Foo</option>
                <optgroup label="Group example">
                    <option>Bar</option>
                    <option value="456">Baz</option>
                </optgroup>
            </Select>
            <Select design="success">
                <option>Success</option>
                <option value="123">Foo</option>
                <optgroup label="Group example">
                    <option>Bar</option>
                    <option value="456">Baz</option>
                </optgroup>
            </Select>
            <Select design="warning">
                <option>Warning</option>
                <option value="123">Foo</option>
                <optgroup label="Group example">
                    <option>Bar</option>
                    <option value="456">Baz</option>
                </optgroup>
            </Select>
            <Select design="danger">
                <option>Danger</option>
                <option value="123">Foo</option>
                <optgroup label="Group example">
                    <option>Bar</option>
                    <option value="456">Baz</option>
                </optgroup>
            </Select>
        </Group>
    </div>;
}

