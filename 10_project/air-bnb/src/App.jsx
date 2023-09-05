import { useLocation, useRoutes } from 'react-router-dom';
import routes from './router';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <div className="page">{useRoutes(routes)}</div>
      <Footer />
    </div>
  );
}

export default App;
