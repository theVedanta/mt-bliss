import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Error from "./components/Error";
import Nav from "./components/Nav";
import { useState } from "react";
import Form from "./components/Form";

const App = () => {
    const [showCont, setShowCont] = useState(false);

    return (
        <BrowserRouter>
            <Nav showCont={showCont} setShowCont={setShowCont} />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Index showCont={showCont} setShowCont={setShowCont} />
                    }
                />
                <Route path="*" element={<Error />} />
            </Routes>
            {showCont ? <Form setShowCont={setShowCont} /> : ""}
        </BrowserRouter>
    );
};

export default App;
