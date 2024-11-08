import REACTDOM from 'react-dom/client';
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';

const isCloudflare = import.meta.env.VITE_DEPLOY_TARGET === 'cloudflare';
const basename = isCloudflare ? '/' : '/applaudify/';

REACTDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
