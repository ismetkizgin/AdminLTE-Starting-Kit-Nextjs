import Link from 'next/link';

const AdminHeader = (props) => {
    return <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#"><i className="fa fa-bars"/></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
                <Link href="/"><a className="nav-link">Home</a></Link>
            </li>
        </ul>

        <form className="form-inline ml-3">
            <div className="input-group input-group-sm">
                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                        <i className="fa fa-search"/>
                    </button>
                </div>
            </div>
        </form>


        <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="fa fa-comments-o fa-fw"/>
                    <span className="badge badge-danger navbar-badge">3</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <a href="#" className="dropdown-item">
                        <div className="media">
                            <i className="fa fa-comments-o fa-fw mr-3"/>
                            <div className="media-body">
                                <h3 className="dropdown-item-title">Brad Diesel<span className="float-right text-sm text-warning"><i className="fa fa-star"/></span></h3>
                                <p className="text-sm">Call me whenever you can, we have much work to complete over the next few days!</p>
                                <p className="text-right text-sm text-muted"><i className="fa fa-clock-o"/> 4 Hours Ago</p>
                            </div>
                        </div>
                    </a>
                    <div className="dropdown-divider"/>
                    <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                </div>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="fa fa-bell-o"/>
                    <span className="badge badge-warning navbar-badge">15</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span className="dropdown-header">15 Notifications</span>
                    <div className="dropdown-divider"/>
                    <a href="#" className="dropdown-item">
                        <i className="fa fa-envelope mr-2"/> 4 new messages
                        <span className="float-right text-muted text-sm">3 mins</span>
                    </a>
                    <div className="dropdown-divider"/>
                    <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i className="fa fa-th-large"/></a>
            </li>
        </ul>
    </nav>
};

export default AdminHeader;
