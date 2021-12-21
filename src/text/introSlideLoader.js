import React from "react";
import { Route } from "react-router-dom";

// Files
import content from "text/introContent.js";
import { firstSection } from "text/sections.js";

// Components
import IntroSlide from "components/Landing/IntroSlide.js";

function IntroSlideLoader() {
  const slideRoutes = [];
  var contentArr = [];
  var _nextURL = firstSection;
  for (const key in content) {
    contentArr.push(content[key]);
  }
  contentArr.reverse();
  for (const idx in contentArr) {
    let { title, text, url } = contentArr[idx];
    slideRoutes.push(
      <Route
        key={idx}
        path={url}
        element={<IntroSlide _title={title} _text={text} _next={_nextURL} />}
      />
    );
    _nextURL = url;
  }
  return slideRoutes;
}

export default IntroSlideLoader;
