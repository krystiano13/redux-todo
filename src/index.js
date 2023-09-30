import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import './reset.css';

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <>
    <App />
  </>
);
