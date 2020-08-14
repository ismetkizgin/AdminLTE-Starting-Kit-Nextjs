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
                            <a className="nav-link" href="#">HOME<span className="sr-only">(current)</span></a>
                        </li>
                        <li className={`nav-item ${pathname === '/about' ? 'active' : ''}`}>
                            <a className="nav-link" href="#"> ABOUT</a>
                        </li>
                        <li className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}>
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className='my-2 my-sm-0 btn btn-outline-light' type="submit">Search</button>
                    </form>
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