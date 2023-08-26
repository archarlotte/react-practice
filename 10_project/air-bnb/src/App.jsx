import { useRoutes } from 'react-router-dom';
import routes from './router';
import AppHeader from './components/app-header/index';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <AppHeader />
      <div className="page">{useRoutes(routes)}</div>
      <Footer />
    </div>
  );
}

export default App;
