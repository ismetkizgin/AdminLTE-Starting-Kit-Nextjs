import PropTypes from 'prop-types';
import { Component } from 'react';

export class Accordion extends Component {
    render() {
    return <div id="accordion"> {this.props.children} </div>
    }
};
