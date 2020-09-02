import PropTypes from 'prop-types';
import { Component } from 'react';

export class Button extends Component {
    render() {
        return <button type="button" className={'btn btn-block btn-' + this.props.classType} {...this.props} >{this.props.children}</button>
    }
};

Button.propTypes = {
    classType: PropTypes.string,
    type: PropTypes.string
};

Button.defaultProps = {
    classType: "success",
    type:'submit'
};