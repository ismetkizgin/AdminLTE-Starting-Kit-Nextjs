import PropTypes from 'prop-types';
import { Component } from 'react';
import { withRouter } from 'next/router';

class NavBar extends Component {
    render() {
        const { pathname } = this.props.router;
        return <nav className={'navbar navbar-expand-lg navbar-dark bg-dark sticky-top'}>
            <div className="container-fluid">
                {this.props.title == null ? <></> : <a className="navbar-brand" href="/">{this.props.title}</a>}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                            <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className={`nav-item ${pathname === '/admin' ? 'active' : ''}`}>
                            <a className="nav-link" href="admin">Admin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
};
NavBar.propTypes = {
    title: PropTypes.string
};

NavBar.defaultProps = {
    title: null
};

export const Navbar = withRouter(NavBar);