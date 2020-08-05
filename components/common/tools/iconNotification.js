import PropTypes from 'prop-types';
import { Component } from 'react';

export class iconNotification extends Component {
    render() {
        return (
            <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <i className={"mr-2 fas fa-"+this.props.icon}></i>
                    <strong className="mr-auto">{this.props.title}</strong>
                    <small>{this.props.subtitle}</small>
                    <button data-dismiss="toast" type="button" className="ml-2 mb-1 close" aria-label="Close"><span
                        aria-hidden="true">×</span></button>
                </div>
                <div className="toast-body">{this.props.body}</div>
            </div>
        )
    }
}

iconNotification.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    icon: PropTypes.string,
    body: PropTypes.string
};