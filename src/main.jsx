import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/index.css";

const el = document.getElementById("root");
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Pre-rendered pages (production) are hydrated; in `npm run dev` the root is empty.
if (el.hasChildNodes()) hydrateRoot(el, app);
else createRoot(el).render(app);

window.__heads_ready = true;
