import REACTDOM from 'react-dom/client';
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';

REACTDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
