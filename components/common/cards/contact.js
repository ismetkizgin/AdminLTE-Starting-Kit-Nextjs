import PropTypes from 'prop-types';
import { Component } from 'react';

export class Contact extends Component {
  render() {
    return <div className="row d-flex align-items-stretch">
      <div className="col-12 d-flex align-items-stretch">
        <div className="card bg-light">
          <div className="card-header text-muted border-bottom-0">
            {this.props.title}
          </div>
          <div className="card-body pt-0">
            <div className="row">
              <div className="col-7">
                <h2 className="lead"><b>{this.props.name}</b></h2>
                <p className="text-muted text-sm"><b>About: </b> {this.props.info} </p>
                <ul className="ml-4 mb-0 fa-ul text-muted">
                  <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building"></i></span> E-Mail Address: {this.props.email}</li> <br/>
                  <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone"></i></span> Phone Number #: {this.props.number} </li>
                </ul>
              </div>
              <div className="col-5 text-center">
                <img src={this.props.img} className="img-circle img-fluid" />
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="text-right">
              <a href="#" className="btn btn-sm bg-teal">
                <i className="fas fa-comments"></i>
              </a>
              <a href="#" className="btn btn-sm btn-primary">
                <i className="fas fa-user"></i> View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
};

Contact.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  info: PropTypes.string,
  email: PropTypes.string,
  number: PropTypes.string,
  img: PropTypes.string
};

Contact.defaultProps = {
  info: "About",
  number: "0000 000 00 00",
  img: "assets/img/default/default_user.png"
};