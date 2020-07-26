import Link from 'next/link';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { Component } from 'react';

class SideBar extends Component {
    render() {
        const { pathname } = this.props.router;
        return <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link href="/">
                <a className="brand-link text-center">
                    <i className="fa fa-home fa-2x brand-image ml-2"/>
                    <span className="brand-text font-weight-light">{this.props.projectName && this.props.projectName}</span>
                </a>
            </Link>

            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <Link href="/admin">
                                <a className={['nav-link', pathname === '/admin' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-home"/>
                                    <p>Home</p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/admin/users">
                                <a className={['nav-link', pathname === '/admin/users' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-user-circle"/>
                                    <p>
                                        Users
                                        <span className="right badge badge-success">2</span>
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item has-treeview menu-closed">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fa fa-dashboard"/>
                                <p>
                                    Other Pages
                                    <i className="right fa fa-angle-left"/>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="fa fa-circle-o nav-icon"/>
                                        <p>Active Page</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="fa fa-circle-o nav-icon"/>
                                        <p>Inactive Page</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    }
}

SideBar.propTypes = {
    projectName: PropTypes.string,
};

SideBar.defaultProps = {
    projectName: 'AdminLTE 3'
};

export const Sidebar = withRouter(SideBar);