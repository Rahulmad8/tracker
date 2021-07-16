import React from "react";
export default class ToolTip extends React.Component {
  componentDidMount() {
    window.$(document).ready(function() {
      window.$('[data-toggle="tooltip"]').tooltip();
    });
  }
  render() {
    let { info, icon, className } = this.props;
    return (
      <a
        href="javaScript:void(0)"
        data-toggle="tooltip"
        data-placement="top"
        className={className}
        title={info}
      >
        <i className={icon}></i>
      </a>
    );
  }
}
