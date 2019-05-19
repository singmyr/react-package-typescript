import * as React from 'react';
import { HelloWorldProps } from '../index';

export default class HelloWorld extends React.Component<HelloWorldProps> {
    private render() {
        return <div style={{ color: this.props.color }}>Hello world!</div>;
    }
}
