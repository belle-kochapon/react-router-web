import Dashboard from "./page/Dashboard";
import Login from "./page/Login";
import Notfound from "./page/Notfound";
import News from "./page/News";

import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
        <Routes>
            {/* path="/" shows the first page */}
            <Route path="/" element={<Dashboard></Dashboard>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            {/* path="/news/:parameter1/:parameter2" */}
            <Route path="/news/:slug/:id" element={<News></News>}></Route>
            {/* path to Error 404 Not found page : if the url is wrong */}
            <Route path="*" element={<Notfound></Notfound>}></Route>
        </Routes>
        </>
    );
}

export default App;