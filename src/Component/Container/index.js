import React, { Component } from "react";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <section className="px-2 px-md-5 pt-4 pb-5 dashboard_div bg_l-secondary">
                <div className="container">
                    <div className="d-flex justify-content-start align-items-center">
                        <section className="py-4 position-relative bg_l-secondary w-100 ">
                            <div className="pb-5 bg-white">
                                <div className="row align-items-center mt-3 p2rem">
                                    <p>Hi, how r you?</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        )
    }
}

export default Container;