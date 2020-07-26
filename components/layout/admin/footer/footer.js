import { Component } from 'react';
import PropTypes from 'prop-types';

export class Footer extends Component {
    render() {
        if (!this.props.leftContent && !this.props.rightContent) {
            return null;
        }

        return <footer className="main-footer clearfix">
            {this.props.rightContent && <div className="float-right d-none d-sm-inline">{this.props.rightContent}</div>}
            {this.props.leftContent && this.props.leftContent}
        </footer >
    }
};

Footer.propTypes = {
    rightContent: PropTypes.element,
    leftContent: PropTypes.string,
};