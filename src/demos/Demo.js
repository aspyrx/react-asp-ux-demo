import React, { Component } from 'react';

export default class Demo extends Component {
    render() {
        const { name, content } = this.constructor.demo;

        return <div>
            <h1>{name}</h1>
            {content}
        </div>;
    }
}

