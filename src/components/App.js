import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";

import theme from "../config/theme";
import store from "../redux/store";
import IndexRoute from "./routes/IndexRoute";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <IndexRoute />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
