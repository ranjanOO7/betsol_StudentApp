import { Provider } from "react-redux";
import "./App.css";
import Home from "./Component/Home";
import store from "./redux/store";

function App() {
    return (
        <>
            <Provider store={store}>
                {/* <header className="App-header"> */}
                <Home />
                {/* </header> */}
            </Provider>
        </>
    );
}

export default App;
