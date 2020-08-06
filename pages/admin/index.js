import { Component } from 'react';
import { AdminLayout } from '../../components/layout';
import { Accordion } from '../../components/common/cards/accordion/accordion'
import {CardBox} from '../../components/common/cards'

export default class Index extends Component {
    render() {
        return <AdminLayout contentTitle={'Home'} contentTitleButton={<i className="fa fa-2x fa-home" />} url={this.props.url}>
            <CardBox title="sasdasd" type="default">as asd as das das</CardBox>
        </AdminLayout>
    }
}