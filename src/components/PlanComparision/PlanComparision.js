import React from "react";
import { planJson } from "../PlanComparision/planJson";
import Button from "../Button/Button";
import "./features.scss";
import ImgTooltip from "./Tooltip";
export default function PlanComparision() {
  const [planData, setPlanData] = React.useState(planJson);
  return (
    <section className="features_section">
      <div className="feature_container">
        <p className="sub_heading">Up-level your Communication</p>
        <p className="caption">
          Unlock Grammarly Premium's advanced features and suggestions.
        </p>
        <div className="plan_comparision">
          {planData.map((plan) => (
            <div className="plan">
              <div className="summary">
                <span className="overline">{plan.caption}</span>
                <div className="title">{plan.title}</div>
                <div className="subtitle">{plan.subtitle}</div>
              </div>

              <Button
                title={plan.button}
                disabled={plan.disabled}
                width={273}
              ></Button>

              <ul>
                {plan.features.map((feature, i) => (
                  <ImgTooltip
                    key={i}
                    text={feature.text}
                    img={feature.img}
                  ></ImgTooltip>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
