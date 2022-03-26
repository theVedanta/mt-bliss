import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Error from "./components/Error";
import Nav from "./components/Nav";

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
