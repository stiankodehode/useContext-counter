import { AppContainer } from "./components/styled";
import LandingPage from "./pages/LandingPage";
import { useState } from "react";
import { CounterContext } from "./contextState/counterContext";

function App() {
    const [count, setCount] = useState(0);

    return (
        <AppContainer>
            <CounterContext.Provider value={{ count, setCount }}>
                <LandingPage />
            </CounterContext.Provider>
        </AppContainer>
    );
}

export default App;
