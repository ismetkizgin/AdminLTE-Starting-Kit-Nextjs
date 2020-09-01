import PropTypes from 'prop-types';
import { Component } from 'react';

export class CardBox extends Component {
    render() {
        return <div className={`card card-${this.props.type}`} >
            <div className="card-header">
                <h3 className="card-title">{this.props.title}</h3>

                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" style={{visibility: this.props.toggleButtonVisibility}}><i className="fas fa-minus"></i></button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove" style={{visibility: this.props.closeButtonVisibility}}><i className="fas fa-times"></i></button>
                </div>
            </div>
            <div className="card-body" style={{ display: "block" }}>
                {this.props.children}
            </div>
        </div>
    }
};

CardBox.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    closeButtonVisibility: PropTypes.string,
    toggleButtonVisibility: PropTypes.string
};

CardBox.defaultProps = {
    title: null,
    type: "default",
    closeButtonVisibility: "hidden",
    toggleButtonVisibility: "hidden"
};


