import { Route, Routes } from "react-router-dom";
import SingleDigitPage from "./landingPage/SingleDigitPage";
import DoubleDigitPage from "./landingPage/DoubleDigitPage";
import TripleDigitPage from "./landingPage/TripleDigitPage";
import Header from "../components/Header";
import Hero from "../components/Hero";

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="*" element={<Hero />} />
                <Route
                    path="/pages/landingPage/SingleDigitPage"
                    element={<SingleDigitPage />}
                />
                <Route
                    path="/pages/landingPage/DoubleDigitPage"
                    element={<DoubleDigitPage />}
                />
                <Route
                    path="/pages/landingPage/TripleDigitPage"
                    element={<TripleDigitPage />}
                />
            </Routes>
        </div>
    );
};

export default LandingPage;
