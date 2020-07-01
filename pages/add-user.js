import AdminLayoutHoc from "../components/Layout/AdminLayoutHoc";
import Link from 'next/link';

export default class AddUser extends React.Component {
    render() {
        return <AdminLayoutHoc contentTitle={'Add User'} contentTitleButton={<i className="fa fa-2x fa-user-plus"/>} url={this.props.url}>
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">New User Form</h3>
                    </div>
                    <form className="form-horizontal">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="validation-ex" className="col-sm-3">First name</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control is-valid" id="validation-ex" placeholder="Anil" value="" required/>
                                    <div className="valid-feedback"><i className="fa fa-check-circle"/> Looks good!</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="validation-ex" className="col-sm-3">Last name</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control is-invalid" id="validation-ex" placeholder="" value="" required/>
                                    <div className="invalid-feedback"><i className="fa fa-exclamation-circle"/> Enter a last name</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="textArea1" className="col-sm-3 control-label">TextArea</label>
                                <div className="col-sm-12">
                                    <textarea id="textArea1" className="form-control" rows="3" placeholder="Enter ..."/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="select-1" className="col-sm-12 control-label">Select</label>
                                <div className="col-sm-offset-2 col-sm-12">
                                    <select multiple="" id="select-1" className="form-control">
                                        <option>option 1</option>
                                        <option>option 2</option>
                                        <option>option 3</option>
                                        <option>option 4</option>
                                        <option>option 5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="check-1" className="col-sm-3 control-label">Checkbox</label>
                                <div className="col-sm-offset-2 col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" id="check-1" type="checkbox" value="option1"/>
                                        <label className="form-check-label" htmlFor="check-1">Checkbox</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="radio-1" className="col-sm-3 control-label">Radio</label>
                                <div className="col-sm-offset-2 col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" id="radio-1" type="radio" value="option1"/>
                                        <label className="form-check-label" htmlFor="radio-1">Radio</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="terms-1" className="col-sm-12 control-label">Terms and conditions</label>
                                <div className="col-sm-offset-2 col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required/>
                                        <label className="form-check-label" htmlFor="invalidCheck3">
                                            Agree to terms and conditions
                                        </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Link href="/"><button type="submit" className="btn btn-info float-right">Save</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayoutHoc>
    }
}
