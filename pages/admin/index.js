import { Component } from 'react';
import { AdminLayout } from '../../components/layout';
import { Button } from '../../components/common'

export default class Index extends Component {
    render() {
        return <AdminLayout contentTitle={'Home'} contentTitleButton={<i className="fa fa-2x fa-home" />} url={this.props.url}>
            <Button>ismet kizgin</Button>
        </AdminLayout>
    }
}