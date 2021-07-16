
import React from "react";
import { public_url } from "../../Utility/Constant";
import "./style.css"

export const NotFound = (props) => {
    return (
        <section className="w-100 px-2 px-md-5 pt-4 pb-5 dashboard_div bg_l-secondary">
            <div class="col-sm-12 text-center">
                <div id="notfound">
                    <div class="notfound">
                        <div class="notfound-404">
                            <h1>404</h1>
                        </div>
                        <h2>Oops! This Page Could Not Be Found</h2>
                        <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                        <a href={`${public_url.case_list}`}>Go To Homepage</a>
                    </div>
                </div>
            </div>
        </section>
    )
}