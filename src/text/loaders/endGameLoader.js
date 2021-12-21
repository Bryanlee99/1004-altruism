import React from "react";
import { Route } from "react-router-dom";
import { futureWorkStart } from "text/sections";

// Files
import endGameConfig from "text/endGameConfig.js";

// Components
import GameEnd from "components/GameEnd/GameEnd.js";

function EndGameLoader() {
  const endGameRoutes = [];
  for (const key in endGameConfig) {
    let { group, text, imgs, imgCaptions, url } = endGameConfig[key];
    endGameRoutes.push(
      <Route
        key={key}
        path={url}
        element={
          <GameEnd
            _group={group}
            _text={text}
            _imgs={imgs}
            _imgCaptions={imgCaptions}
            _futureWorkURL={futureWorkStart}
          />
        }
      />
    );
  }
  return endGameRoutes;
}

export default EndGameLoader;
