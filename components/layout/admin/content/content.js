import PropTypes from 'prop-types';
import { Component } from 'react';

export class Content extends Component {
    render() {
        return <div className="content-wrapper" style={{ minHeight: '93vh' }}>
            <div className="content-header">
                {this.props.title && <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-10">
                            <h1 className="m-0 text-dark">{this.props.title}</h1>
                        </div>
                        <div className="col-sm-2 text-right text-muted">
                            {this.props.titleButton && this.props.titleButton}
                        </div>
                    </div>
                </div>}
            </div>
            <div className="content">
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        </div>
    }
};

Content.propTypes = {
    title: PropTypes.string,
    titleButton: PropTypes.element,
};