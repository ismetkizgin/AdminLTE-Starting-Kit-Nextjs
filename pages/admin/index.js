import { Component } from 'react';
import { AdminLayout } from '../../components/layout';

export default class Index extends Component {
    render() {
        return <AdminLayout contentTitle={'Home'} contentTitleButton={<i className="fa fa-2x fa-home" />} url={this.props.url}>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fa fa-text-width" />&nbsp;Headlines
                            </h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                    <i className="fa fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                    <i className="fa fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <h1>h1. Bootstrap heading</h1>
                            <h2>h2. Bootstrap heading</h2>
                            <h3>h3. Bootstrap heading</h3>
                            <h4>h4. Bootstrap heading</h4>
                            <h5>h5. Bootstrap heading</h5>
                            <h6>h6. Bootstrap heading</h6>
                        </div>
                        <div className="card-footer text-right text-muted">
                            <small>Card Footer</small>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fa fa-text-width" />&nbsp;Text Emphasis
                            </h3>
                        </div>
                        <div className="card-body">
                            <p className="lead">Lead to emphasize importance</p>
                            <p className="text-success">Text green to emphasize success</p>
                            <p className="text-info">Text aqua to emphasize info</p>
                            <p className="text-primary">Text light blue to emphasize info (2)</p>
                            <p className="text-danger">Text red to emphasize danger</p>
                            <p className="text-warning">Text yellow to emphasize warning</p>
                            <p className="text-muted">Text muted to emphasize general</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fa fa-text-width" />&nbsp;Description
                            </h3>
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Description lists</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                                <dt>Euismod</dt>
                                <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                                <dt>Malesuada porta</dt>
                                <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fa fa-text-width" />&nbsp;Description Horizontal
                            </h3>
                        </div>
                        <div className="card-body">
                            <dl className="dl-horizontal">
                                <dt>Description lists</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                                <dt>Euismod</dt>
                                <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                                <dt>Felis euismod semper eget lacinia</dt>
                                <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                                sit amet risus.
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <div className="card card-default color-palette-box">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fa fa-tag" />&nbsp;Color Palette
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-4 col-md-2">
                                    <h4 className="text-center">Primary</h4>

                                    <div className="color-palette-set">
                                        <div className="bg-primary disabled color-palette"><span>Disabled</span></div>
                                        <div className="bg-primary color-palette"><span>#3c8dbc</span></div>
                                    </div>
                                </div>

                                <div className="col-sm-4 col-md-2">
                                    <h4 className="text-center">Info</h4>

                                    <div className="color-palette-set">
                                        <div className="bg-info disabled color-palette"><span>Disabled</span></div>
                                        <div className="bg-info color-palette"><span>#00c0ef</span></div>
                                    </div>
                                </div>

                                <div className="col-sm-4 col-md-2">
                                    <h4 className="text-center">Success</h4>

                                    <div className="color-palette-set">
                                        <div className="bg-success disabled color-palette"><span>Disabled</span></div>
                                        <div className="bg-success color-palette"><span>#00a65a</span></div>
                                    </div>
                                </div>

                                <div className="col-sm-4 col-md-2">
                                    <h4 className="text-center">Warning</h4>

                                    <div className="color-palette-set">
                                        <div className="bg-warning disabled color-palette"><span>Disabled</span></div>
                                        <div className="bg-warning color-palette"><span>#f39c12</span></div>
                                    </div>
                                </div>

                                <div className="col-sm-4 col-md-2">
                                    <h4 className="text-center">Danger</h4>

                                    <div className="color-palette-set">
                                        <div className="bg-danger disabled color-palette"><span>Disabled</span></div>
                                        <div className="bg-danger color-palette"><span>#f56954</span></div>
                                    </div>
                                </div>

                                <div className="col-sm-4 col-md-1">
                                    <h4 className="text-center">Gray</h4>

                                    <div className="color-palette-set">
                                        <div className="bg-gray disabled color-palette"><span>Disabled</span></div>
                                        <div className="bg-gray color-palette"><span>#d2d6de</span></div>
                                    </div>
                                </div>

                                <div className="col-sm-4 col-md-1">
                                    <h4 className="text-center">Black</h4>

                                    <div className="color-palette-set">
                                        <div className="bg-black disabled color-palette"><span>Disabled</span></div>
                                        <div className="bg-black color-palette"><span>#111111</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    }
}