import React, { Component } from 'react';
import User from './User.jsx';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>

                <User name="anime" />
            </div>
        );
    }
}
