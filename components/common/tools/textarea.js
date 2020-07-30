import PropTypes from 'prop-types';
import { Component } from 'react';

export class Textarea extends Component {
    render() {
        return <textarea name={this.props.name} class="form-control" rows={this.props.rows} cols={this.props.cols} placeholder={this.props.placeholder} disabled={this.props.disabled} required ></textarea>
    }
};

Textarea.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    row: PropTypes.number,
    col: PropTypes.number    
};

Textarea.defaultProps = {
    placeholder: "Enter text",
    disabled: false,
    rows: 4,
    cols: 50
};