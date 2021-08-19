import React from "react";
import "./stats_section.scss";
import Score from "./Score";
export default function Stats() {
  return (
    <section className="stats_section">
      <div className="stats_container">
        <span className="title">Premium Customers Report Better Results</span>
        <span className="subtitle">
          We routinely survey Grammarly users and have found that:
        </span>

        <div className="score_results">
          <Score
            value={76}
            text={"76% of Grammarly users find writing more enjoyable."}
          />
          <Score
            value={85}
            text={"85% of Grammarly users are now stronger writers."}
          />
          <Score
            value={70}
            text={
              "70% of Grammarly users reported an increased level of writing confidnece"
            }
          />
        </div>
      </div>
    </section>
  );
}
