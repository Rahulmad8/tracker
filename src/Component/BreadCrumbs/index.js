import React from "react";
import { Link, withRouter } from "react-router-dom";
import { public_url } from "../../Utility/Constant";
class BreadCrumbs extends React.Component {

    render() {
        let { name1, name2, url1, url2 } = this.props;
        return (
            <React.Fragment>
                <div className="backToDashboard py-3">
                    <div className="d-flex justify-content-between container-fluid">
                        <Link to={public_url.case_list}>Home</Link>
                    </div>
                </div>
                <section className="bg_l-secondary pt-4">
                    <div className="container  ">
                        <div className="d-flex justify-content-start align-items-center">
                            <div className="breadcrums d-flex align-items-center flex-wrap">
                                <ul>
                                    <li className="mr-1" className="active">
                                        <Link to={url1}>{name1}</Link>
                                    </li>
                                    <li className="mr-1">
                                        <Link to={url2} >{name2}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}
export default withRouter(BreadCrumbs);
