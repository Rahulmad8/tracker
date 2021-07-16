
import React from "react";
import "./style.css"

export const Loader = (props) => {
    return (
        <section className="w-100 px-2 px-md-5 pt-4 pb-5 dashboard_div bg_l-secondary">
            <div className="col-sm-12 text-center">
                <div className="loader1">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* <div className="col-lg-12" style={{ height: 250 }}>
                <h3 className="font-weight-bold text-primary ml-3 mb-3 text-center">
                    <i className="fa fa-spinner fa-spin mr-2" />
                Loading...
              </h3>
            </div> */}
        </section>
    )
}