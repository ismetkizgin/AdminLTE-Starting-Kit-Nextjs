import { Component } from "react"
import { AdminLayout } from '../../components/layout'

export default class Login extends Component {
    render() {
        return <AdminLayout layoutNone={true} className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <a href="/">Admin LTE Starting Kit <b>Nextjs</b></a>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign In To Get Started</p>

                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-user"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label for="remember">Remember me</label>
                                </div>
                            </div>
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </div>
                        </div>
                        <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">Register</a>
                        </p>
                    </div>
                </div>
            </div>
        </AdminLayout >
    }
}