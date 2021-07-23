import React from "react";
import CenterInfo from "../../components/Center/CenterInfo";
import WorkFaq from "../../components/WorkFaq/WorkFaq";
export default function FaQ() {
  return (
    <section
      style={{ background: "rgb(248, 250, 255)", padding: "50px 0 100px " }}
    >
      <div className="container">
        <CenterInfo text="Frequently Asked Questions" />
        <WorkFaq />
      </div>
    </section>
  );
}

// #171738
