import { Component } from 'react';

export class Textarea extends Component {
    render() {
        return <textarea {...this.props} required></textarea>
    }
};

Textarea.defaultProps = {
    rows: 4,
    cols: 50
};