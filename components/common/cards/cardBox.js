import PropTypes from 'prop-types';
import { Component } from 'react';

export class CardBox extends Component {
    render() {
        return <div class={`card card-${this.props.type}`} >
            <div class="card-header">
                <h3 class="card-title">{this.props.title}</h3>

                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
                    <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
                </div>
            </div>
            <div class="card-body" style={{ display: "block" }}>
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


