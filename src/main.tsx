import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./style/global.css";
import "./i18n/i18n.ts";
import { ChekUserProvider } from "./context/ChekUser.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ChekUserProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ChekUserProvider>
  </Provider>
);
