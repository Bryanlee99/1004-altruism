import React from "react";
import { Route } from "react-router-dom";

// Files
import decisionPoints from "text/decisionsConfig.js";

// Components
import Decision from "components/Decisions/Decision.js";

function DecisionLoader() {
  const decisionRoutes = [];
  for (const key in decisionPoints) {
    let { text, options, optionURLs, url } = decisionPoints[key];
    decisionRoutes.push(
      <Route
        key={key}
        path={url}
        element={
          <Decision _text={text} _options={options} _optionURLs={optionURLs} />
        }
      />
    );
  }
  return decisionRoutes;
}

export default DecisionLoader;
