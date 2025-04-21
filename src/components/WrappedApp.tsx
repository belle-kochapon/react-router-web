import { BrowserRouter } from 'react-router-dom';
import App from '../App.tsx';

function WrappedApp() {
  return (
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
  );
}

export default WrappedApp;

// For older version of computer (ex. computers using IE as a browser), can use <HashRouter> instead of <BrowserRouter>