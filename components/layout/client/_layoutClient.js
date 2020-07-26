import { Component } from 'react'
import Head from 'next/head'

export class ClientLayout extends Component {
    render() {
        return <html>
            <Head></Head>
            <body>
                {this.props.children}
            </body>
        </html>
    }
}