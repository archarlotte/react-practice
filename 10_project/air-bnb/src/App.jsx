import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppHeader from './components/app-header/index'

function App() {
  return (
    <div>
      <AppHeader />
      <div className="page">{useRoutes(routes)}</div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
