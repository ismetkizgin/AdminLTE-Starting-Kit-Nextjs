import PropTypes from 'prop-types';
import { Component } from 'react';

export class Button extends Component {
    render() {
        return <button name={this.props.name} type="button" className={'btn btn-block btn-' + this.props.type} disabled={this.props.disabled}>{this.props.title}</button>
    }
};

Button.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    title: "Button Name",
    type: "success",
    disabled: false
};