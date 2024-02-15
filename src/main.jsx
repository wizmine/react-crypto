import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import "./style/index.css";

const root = document.getElementById("root");

createRoot(root).render(<App />);
