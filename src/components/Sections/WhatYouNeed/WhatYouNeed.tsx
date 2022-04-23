import React from "react";
import Section from "../../Section/Section";
import CSS from "./WhatYouNeed.module.css";

function WhatYouNeed() {
  return (
    <Section
      sharp
      width="100%"
      row
      style={{ backgroundColor: "var(--demba-dark)", color: "white" }}
    >
      <div>
        <div style={{ fontSize: 40 }}>
          <strong>Everything you need for a <u>perfect</u> website</strong>
        </div>
      </div>
      <div>
        <div>Check out what i can work with</div>
      </div>
    </Section>
  );
}

export default WhatYouNeed;
