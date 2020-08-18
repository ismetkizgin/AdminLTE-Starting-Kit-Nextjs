import { Component } from 'react'
import { AdminLayout } from '../../components/layout'
import { handleAuthSSR } from '../../utils';

export default class Index extends Component {
    render() {
        return <AdminLayout contentTitle={'Home'} contentTitleButton={<i className="fa fa-2x fa-home" />} url={this.props.url}>
        </AdminLayout>
    }
}

Index.getInitialProps = async (ctx) => {
    // Must validate JWT
    // If the JWT is invalid it must redirect
    // back to the main page. You can do that
    // with Router from 'next/router

    await handleAuthSSR(ctx);
    console.log("sss", ctx);

    // Must return an object
    return {}
}