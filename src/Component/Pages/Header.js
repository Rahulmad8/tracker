import React from "react";
import InnerBox from "./InnerBox";
import { public_url } from "../../Utility/Constant";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { syncLogout, syncLogin } from "../../Redux/Action/Login";
import { logout } from "../../Utility/Services/Login";
import { ts, te } from "../../Utility/ReduxToaster";
import { getUserByEmployeeId } from "../../Utility/Services/helper";
import store from "../../Redux/store";
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showUserName: true,
    };
  }

  // if (this.props && this.props.login && this.props.login.isLogin && this.props.login.isLogin == true) {
  //   this.GetUserDetail();
  // }
  componentDidMount = () => {
    this.getUser();
  };

  getUser = () => {
    // console.log(
    //   "this...",
    //   localStorage.getItem("employeeId") && this.props.location.pathname != "/",
    //   this.props.location.pathname
    // );
    // if (
    //   localStorage.getItem("employeeId") &&
    //   this.props.location.pathname != "/"
    // ) {
    //   getUserByEmployeeId(localStorage.getItem("employeeId")).then((res) => {
    //     console.log("res app.js", res);
    //     if (res.error) {
    //       return;
    //     }
    //     if (res.data && res.data.data && res.data.data.user) {
    //       this.props.syncLogin({ data: res.data.data.user }, "credit_module");
    //     }
    //   });
    // }
    // if (
    //   localStorage.getItem("employeeId") &&
    //   this.props.location.pathname == "/"
    // ) {
    //   this.setState({ showUserName: false });
    // }
    if (
      localStorage.getItem("employeeId") &&
      localStorage.getItem("userType") == 2
    ) {
      let empId = localStorage.getItem("employeeId");
      let obj = {
        employeeId: empId,
        moduleId: 2,
      };
      getUserByEmployeeId(obj).then((res) => {
        console.log("res app.js", res);
        if (res.error) {
          return;
        }
        if (res.data && res.data.data && res.data.data.user) {
          this.props.syncLogin({ data: res.data.data.user }, "credit_module");
        }
      });
    } else {
      if (window.location.pathname != public_url.login) {
      }
    }
  };

  handleLogout = (e) => {
    e.preventDefault();
    logout().then((res) => {
      if (res.error) {
        return;
      } else {
        // console.log("logoout", res.data.message)
        this.props.syncLogout("credit_module");
        window.location.pathname = public_url.login;
        ts(res.data.message);
      }
    });
  };
  render() {
    let pathName = window.location.pathname;
    let showBox = false;
    let { isLogin, data } = this.props.login;
    let { showUserName } = this.state;
    /*  if (
       window.location.pathname.startsWith(public_url.prospect_list) ||
       window.location.pathname.startsWith(public_url.lead_list) ||
       window.location.pathname.startsWith(public_url.lead_con) ||
       window.location.pathname.startsWith(public_url.lead_con) ||
       window.location.pathname.startsWith(public_url.otp_verify) ||
       window.location.pathname.startsWith(public_url.concent_request_sent)
     ) {
       showBox = true;
     } */
    //  console.log("isLogin, data",isLogin, data)
    return (
      <React.Fragment>
        <header>
          <div className="top_header orangeLigth d-flex justify-content-end">
            <div className="container-fluid">
              <div className="d-flex align-items-center justify-content-end py-2">
                {isLogin &&
                  showUserName &&
                  window.location.pathname != public_url.login &&
                  window.location.pathname != "/" && (
                    <React.Fragment>
                      <a
                        href="#"
                        className="text-white fw-100 textGreenHover mr-3"
                        onClick={(e) => this.handleLogout(e)}
                      >
                        <i className="fa-lg fa fa-sign-out mr-1"></i> Logout
                      </a>
                      {/* <a
                      href="#"
                      className="btn-white btn px-4 py-1 text-primary rounded-pill fs-12 mr-3"
                    >
                      <i className="fa-lg fa fa-user"></i> {data.employeeName}
                    </a> */}
                    </React.Fragment>
                  )}
                {/* <a href="#" className="text-white textGreenHover fw-100">
                  <i className="fa-lg fa fa-mobile mr-1"></i> Download App
                </a> */}
              </div>
            </div>
          </div>
          <div className="header py-3 ">
            <div className="container-fluid">
              <div className="d-flex align-items-center justify-content-between">
                <div className="flex-fill">
                  <img
                    src="/images/logo-tsvg.svg"
                    onClick={() => {
                      if (isLogin)
                        this.props.history.push(public_url.lead_list);
                    }}
                  />
                </div>
                {window.location.pathname != public_url.login &&
                window.location.pathname != "/" &&
                window.location.pathname != "/resetpassword" &&
                window.location.pathname != "/forgetpassword" ? (
                  <div className="flex-fill">
                    <h3 className="text-primary fw-700 fs-18">Welcome</h3>
                    <h3 className="text-green fw-700 fs-18">
                      {isLogin && showUserName
                        ? data && data.employeeName
                        : "DevP"}
                    </h3>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </header>
        {/* {isLogin && showBox && <InnerBox />} */}
      </React.Fragment>
    );
  }
}
export default connect((state) => state, { syncLogout, syncLogin })(
  withRouter(Header)
);
