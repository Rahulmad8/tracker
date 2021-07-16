import React from "react";

export const NoDataFound = (props) => {
  return (
    <section className="w-100 px-2 px-md-5 pt-4 pb-5 dashboard_div bg_l-secondary">
      <div class="col-sm-12 text-center">
        <div style={{ height: "auto" }}>
          <h3 className="font-weight-bold text-primary ml-3 mb-3 text-center">
            No Records Found
          </h3>
        </div>
      </div>
    </section>
  );
};
