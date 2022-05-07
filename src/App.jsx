import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Error from "./components/Error";
import Nav from "./components/Nav";
import Booking from "./components/Booking";
// import Payment from "./components/Payment";
// import Success from "./components/Success";
// import Cancel from "./components/Cancel";

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/booking" element={<Booking />} />
                {/* <Route exact path="/payment" element={<Payment />} />
                <Route exact path="/success" element={<Success />} />
                <Route exact path="/cancel" element={<Cancel />} /> */}
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
