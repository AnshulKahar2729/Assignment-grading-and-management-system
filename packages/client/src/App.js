import { Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './routes';
import NotFound from './components/_commons/NotFound';

function App() {
  return (
      <>
        <Routes>
          {routes.map((data, index) => (
            <Route
              // onUpdate={() => window.scrollTo(0, 0)}
              exact={true}
              path={data.path}
              element={data.component}
              key={index}
              // onEnter={() => window.scrollTo(0, 0)}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
  );
}

export default App;
