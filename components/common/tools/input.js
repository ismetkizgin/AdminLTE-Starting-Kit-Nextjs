import PropTypes from 'prop-types';
import { Component } from 'react';

export class Input extends Component {
    render() {
        return <input name={this.props.name} type={this.props.type} class={this.props.className} disabled={this.props.disabled} placeholder={this.props.placeholder} required/>
    }
};

Input.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string    
};

/*should use "form-check-input" class for chekbox*/
Input.defaultProps = {
    placeholder: "Text",
    type: "Text",
    disabled: false,
    className:"form-control"
};
