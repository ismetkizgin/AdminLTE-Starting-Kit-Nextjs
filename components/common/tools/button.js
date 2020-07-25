import PropTypes from 'prop-types';
import { Component } from 'react';

export class Button extends Component {
    render() {
        return <button type="button" class={'btn btn-block btn-' + this.props.type} disabled={this.props.disabled}>{this.props.name}</button>
    }
};

Button.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    name: "Button Name",
    type: "success",
    disabled: false
};