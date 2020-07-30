import { Component } from "react";

import '../../public/assets/css/stylesAdmin.scss'
import Head from 'next/head'

export default class Login extends Component {
  render() {
    return (
        <html>
        <Head>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/js/all.min.js" integrity="sha512-M+hXwltZ3+0nFQJiVke7pqXY7VdtWW2jVG31zrml+eteTP7im25FdwtLhIBTWkaHRQyPrhO2uy8glLMHZzhFog==" crossOrigin="anonymous"></script>
        </Head>
        <body className="login-page" style={{minHeight: '512.391px'}}>
        <div className="login-box">
            <div className="login-logo">
                <a href="../../index2.html"><b>Ailem Güvende</b></a>
            </div>

            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Oturum Açın</p>

                    <form action="/index" method="post">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="TC"/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span style={{minWidth:'16px' , minHeight:'16px'}} className="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Şifre"/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span style={{minWidth:'16px' , minHeight:'16px'}} className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember"/>
                                    <label htmlFor="remember">
                                        Beni Hatırla
                                    </label>
                                </div>
                            </div>

                            <div className="col-6">
                                <button type="submit" className="btn btn-primary btn-block">Oturum Aç</button>
                            </div>

                        </div>
                    </form>



                    <p className="mb-1">
                        <a href="forgot-password.html">Şifremi Unuttum</a>
                    </p>
                    <p className="mb-0">
                        <a href="register.html" className="text-center">Kayıt Ol</a>
                    </p>
                </div>

            </div>
        </div>

        </body>
        </html>

    );
  }
}