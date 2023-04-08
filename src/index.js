// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Authcontexprovider } from "./Store/Auth-context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Authcontexprovider>
    <App />
  </Authcontexprovider>
);
