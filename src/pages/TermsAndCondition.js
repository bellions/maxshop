import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function TermsAndCondition() {
  return (
    <>
      <Meta title={"Term And Conditions"} />
      <BreadCrumb title="Term and Conditions" />
      <section className="policy-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermsAndCondition;
