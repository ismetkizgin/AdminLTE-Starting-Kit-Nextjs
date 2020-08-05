import { Component } from 'react';
import PropTypes from 'prop-types';

export class defaultNotification extends Component {
    render() {
        return (
            <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="mr-auto">{this.props.title}</strong>
                    <button data-dismiss="toast" type="button" className="ml-2 mb-1 close" aria-label="Close"><span
                        aria-hidden="true">×</span></button>
                </div>
                <div className="toast-body">{this.props.body}</div>
            </div>
        )
    }
}

defaultNotification.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
};