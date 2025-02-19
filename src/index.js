import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@mui/material/styles";
import theme from "./presentation/theme";
import { Provider } from "react-redux";
import Store from "./data/redux/store";
import { SnackbarProvider } from "notistack";
import { Button } from "@mui/material";

const appTheme = createMuiTheme(theme);

const notistackRef = React.createRef();
const onClickDismiss = (key) => () => {
  notistackRef.current.closeSnackbar(key);
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <Provider store={Store}>
        <SnackbarProvider
          ref={notistackRef}
          action={(key) => (
            <Button
              onClick={onClickDismiss(key)}
              style={{
                textTransform: "none",
                color: "white",
                fontFamily: "roboto",
              }}
            >
              Dismiss
            </Button>
          )}
          maxSnack={2}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          autoHideDuration={3000}
        >
          <App />
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
