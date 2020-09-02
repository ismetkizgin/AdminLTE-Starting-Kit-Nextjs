import { Component } from 'react';

export class Textarea extends Component {
    render() {
        return <textarea {...this.props} required></textarea>
    }
};

Textarea.defaultProps = {
    rows: 5,
    cols: 50,
    className: "form-control"
};