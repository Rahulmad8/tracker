import React, { Component } from "react";
import { Select, Input, TextArea, File } from "../Component/Input";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export class index extends Component {
  state = {
    trackerValue: "",
    totalValue: "",
    trackerdetails: [],
  };

  onFormChange = (name, value, error) => {
    let { trackerValue } = this.state;
    trackerValue = value;
    this.setState({
      trackerValue,
    });
  };

  add = () => {
    let { totalValue, trackerValue } = this.state;
    totalValue = trackerValue + totalValue;
    this.setState(
      {
        totalValue,
      },
      this.detailSection(totalValue, "Add")
    );
  };

  remove = () => {
    let { totalValue, trackerValue } = this.state;
    if (totalValue == "") {
      toast.error("Can not remove value from Zero", {
        type: toast.TYPE.ERROR,
        autoClose: 4000,
      });
    } else {
      totalValue = totalValue - trackerValue;
    }

    this.setState(
      {
        totalValue,
      },
      this.detailSection(totalValue, "Remove")
    );
  };

  detailSection = (value, action) => {
    let { trackerdetails } = this.state;
    let obj = {
      date: moment().format(),
      value: value,
      action: action,
    };
    trackerdetails.push(obj);

    this.setState({
      trackerdetails,
    });
  };

  render() {
    let { trackerValue, totalValue, trackerdetails } = this.state;
    console.log("date", trackerdetails?.length > 0);
    const today = moment();
    console.log("today", today.format());
    return (
      <section className="px-2 px-md-5 pt-4 pb-5 dashboard_div bg_l-secondary">
        <div className="d-flex justify-content-start align-items-center">
          <section className="py-5 position-relative bg_l-secondary w-100">
            <div className="">
              <div className="row mt-4 disbursment bg-white">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 col-sm-12 col-md-12 mb-2 text-center">
                  <h5>Balance : {totalValue}</h5>
                </div>
                <div className="col-lg-3"></div>
                <div className="col-lg-3"></div>
                <div className="col-lg-6 col-sm-12 col-md-12 text-center">
                  <Input
                    className="form-control text-center fs-16"
                    placeholder="Type here.."
                    name="trackerValue"
                    value={trackerValue}
                    onChangeFunc={(name, value, error) => {
                      //   value = replaceComma(value);
                      this.onFormChange(name, value, error);
                    }}
                    // disabled={}
                    isReq={true}
                    reqType="number"
                    title="trackerValue"
                  />
                </div>
                <div className="col-lg-3"></div>
                <div className="col-lg-3"></div>
                <div className="col-lg-6 col-sm-12 col-md-12 mb-2 text-center">
                  <button
                    //   disabled={}
                    className={`btn btn-secondary btn-rounded ls-1 cursor-pointer mr-4 fs-16 btn-green`}
                    onClick={() => this.add()}
                  >
                    Add
                  </button>
                  <button
                    //   disabled={}
                    className={`btn btn-secondary btn-rounded ls-1 cursor-pointer mr-4 fs-16 btn-green`}
                    onClick={() => this.remove()}
                  >
                    Remove
                  </button>
                </div>
                <div className="col-lg-3"></div>
              </div>
              {/* 2nd section */}
              <div className="row mt-5 disbursment bg-white">
                <div
                  class="table-responsive disbursment"
                  style={{ backgroundColor: "#fff" }}
                >
                  <table className="table table-bordered text-center table-sm">
                    <thead>
                      <tr className="text-center bg_d-primary text-white">
                        <th colSpan={3}>Transactions</th>
                      </tr>
                      <tr className="text-center subHead">
                        <th className="subHead " colSpan={1}>
                          Date
                        </th>
                        <th className="subHead " colSpan={1}>
                          Value
                        </th>
                        <th className="subHead " colSpan={1}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {trackerdetails?.length > 0
                        ? trackerdetails.map((res, index) => (
                            <tr>
                              <td>{res && res.date}</td>
                              <td>{res && res.value}</td>

                              <td>{res && res.action}</td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default index;
