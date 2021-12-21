import React from "react";
import { Route } from "react-router-dom";

// Files
import darwin from "text/1darwin.js";
import groupLimits from "text/2revertHamilton.js";
import hamilton from "text/3hamilton.js";
import multiSeries from "text/4multi.js";
import wilsonNowak from "text/5wilsonNowak.js";
import kinMultiEqual from "text/6kinMultiEqual.js";
import {
  decision1Url,
  decision2Url,
  decision3Url,
  decision4Url,
  decision5Url,
  decision6Url,
} from "text/sections.js";

// Components
import Article from "components/Article/Article.js";

function ArticleSeriesLoader() {
  const articleRoutes = [];
  const articleList = [
    darwin,
    groupLimits,
    hamilton,
    multiSeries,
    wilsonNowak,
    kinMultiEqual,
  ];
  const decisionURLs = [
    decision1Url,
    decision2Url,
    decision3Url,
    decision4Url,
    decision5Url,
    decision6Url,
  ];
  for (const idx in articleList) {
    var _nextURL = decisionURLs[idx];
    const content = articleList[idx];
    var contentArr = [];
    for (const key in content) {
      contentArr.push(content[key]);
    }
    contentArr.reverse();
    for (const idx in contentArr) {
      let { title, text, url, references } = contentArr[idx];
      articleRoutes.push(
        <Route
          key={idx}
          path={url}
          element={
            <Article
              _title={title}
              _text={text}
              _next={_nextURL}
              _references={references}
            />
          }
        />
      );
      _nextURL = url;
    }
  }
  return articleRoutes;
}

export default ArticleSeriesLoader;
