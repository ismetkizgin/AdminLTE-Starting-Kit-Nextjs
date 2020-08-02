import PropTypes from 'prop-types';
import { Component } from 'react';

export class AccordionItem extends Component {
    render() {
        return <div className={'card card-' + this.props.type}>
            <div class="card-header" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                <h4 className="card-title">
                    <a>
                        {this.props.title}
                    </a>
                </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse in">
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        </div>
        
    }
};

AccordionItem.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
};

AccordionItem.defaultProps = {
    title: "Accordion Item Name",
    type: "success",
};