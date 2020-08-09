import PropTypes from 'prop-types';
import { Component } from 'react';

export class Alert extends Component {
    render() {
        return <div className={"alert alert-dismissible alert-" + this.props.type}>
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h5><i className={"icon fas fa-" + this.props.icon}></i>{this.props.title}</h5>
            {this.props.children}
        </div>
    }
};

Alert.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string
};
/*
Danger icon: ban
Info icon: info
Warning icon: exclamation-triangle
Success icon: check
*/