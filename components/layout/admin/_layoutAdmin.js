import '../../../public/assets/css/stylesAdmin.scss'
import { Header } from './header'
import { Sidebar, ControlSidebar } from './sidebar'
import { Content } from './content'
import { Footer } from './footer'
import PropTypes from 'prop-types'
import { Component } from 'react'
import Head from 'next/head'

export class AdminLayout extends Component {
    render() {
        return <html>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" />
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" />
                <script src="/assets/js/adminlte.min.js" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
            </Head>
            {this.props.layoutNone ? <body className={this.props.className}>
                {this.props.children}
            </body> : <body className={"sidebar-mini layout-fixed " + this.props.className}>
                    <div className="wrapper">
                        <Header />
                        <Sidebar />
                        <Content title={this.props.contentTitle} titleButton={this.props.contentTitleButton}>
                            {this.props.children}
                        </Content>
                        <ControlSidebar />
                        <Footer rightContent={<div><b>Version:</b>1.0.0</div>} leftContent={'Copyright © 2020 Unit Zero All rights reserved.'} />
                    </div>
                </body>}
        </html>
    }
}

AdminLayout.propTypes = {
    contentTitle: PropTypes.string,
    contentTitleButton: PropTypes.element,
    className: PropTypes.string,
    layoutType: PropTypes.bool
};

AdminLayout.propTypes = {
    layoutNone: false,
    className: null,
    contentTitle: null,
    contentTitleButton: null
}