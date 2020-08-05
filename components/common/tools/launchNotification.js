import PropTypes from 'prop-types';
import { Component } from 'react';

export class launchNotification extends Component {
    render() {
        return (
            <div className={"toast fade show bg-"+this.props.type}  role="alert" aria-live="assertive" aria-atomic="true" >
                <div className="toast-header">
                    <strong className="mr-auto">{this.props.title}</strong>
                    <small>{this.props.subtitle}</small>
                    <button data-dismiss="toast" type="button" className="ml-2 mb-1 close" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="toast-body">
                    {this.props.body}
                </div>
            </div>
        )
    }
}

launchNotification.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    subtitle: PropTypes.string,
    body: PropTypes.string
};

/*
Danger Notification: danger
Info Notification: info
Warning Notification: warning
Success Notification: success
Maroon Notification: maroon
*/