import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.jsx";
import { findRoute, ROUTES, LASTMOD, NOT_FOUND } from "./seo/routes.js";
import { headToHtml } from "./seo/head.js";

export function render(url) {
  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
  const route = url === "/404" ? NOT_FOUND : findRoute(url);
  return { html, head: headToHtml(route) };
}
export { ROUTES, LASTMOD };
