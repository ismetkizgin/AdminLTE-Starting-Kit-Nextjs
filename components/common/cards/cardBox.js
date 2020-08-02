import PropTypes from 'prop-types';
import { Component } from 'react';

export class CardBox extends Component {
    render() {
        return <div className={`card card-${this.props.type}`} >
            <div className="card-header">
                <h3 className="card-title">{this.props.title}</h3>

                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times"></i></button>
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
    type: PropTypes.string
};

CardBox.defaultProps = {
    title: "",
    type: "success"
};


