import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Authentication from "./components/authentication/Authentication";
import { injectDecoratorClientSide } from "@navikt/nav-dekoratoren-moduler/csr";
import "./main.css";

if (process.env.NODE_ENV === "development") {
  await injectDecoratorClientSide({
    env: "dev",
    urlLookupTable: false,
  });
}

if (process.env.NODE_ENV === "development") {
  const msw = await import("./mocks/browser");
  await msw.worker.start({ onUnhandledRequest: "bypass" });
  msw.worker.printHandlers();
}

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Authentication>
      <App />
    </Authentication>
  </React.StrictMode>
);
