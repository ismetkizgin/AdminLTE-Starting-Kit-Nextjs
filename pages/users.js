import AdminLayoutHoc from "../components/Layout/AdminLayoutHoc";
import Link from 'next/link';

export default class Users extends React.Component {
    render() {
        return <AdminLayoutHoc
            contentTitle={'Users'}
            contentTitleButton={<Link href="/add-user">
                <button type="button" className="btn btn-outline-success btn-sm"><i className="fa fa-user-plus fa-fw"/> Add a new user</button>
            </Link>}
            url={this.props.url}
        >
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Current active users</h3>
                            <div className="card-tools">
                                <div className="input-group input-group-sm" style={{width: '150px'}}>
                                    <input type="text" name="table_search" className="form-control float-right" placeholder="Search"/>
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-default"><i className="fa fa-search"/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body table-responsive p-0">
                            <table className="table table-hover">
                                <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Reason</th>
                                    <th>Progress</th>
                                </tr>
                                <tr>
                                    <td>183</td>
                                    <td>John Doe</td>
                                    <td>11-7-2014</td>
                                    <td><span className="badge bg-success">Approved</span></td>
                                    <td>This user was approved by <b>Anil</b></td>
                                    <td className="align-middle">
                                        <div className="progress progress-xs">
                                            <div className="progress-bar bg-success" style={{width: '100%'}}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>175</td>
                                    <td>Mike Doe</td>
                                    <td>11-7-2014</td>
                                    <td><span className="badge bg-danger">Denied</span></td>
                                    <td>This user was declined by <b>Anil</b></td>
                                    <td className="align-middle">
                                        <div className="progress progress-xs">
                                            <div className="progress-bar bg-danger" style={{width: '25%'}}/>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayoutHoc>
    }
}
