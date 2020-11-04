import React, { useContext, useReducer, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import { BrowserRouter, useHistory } from "react-router-dom";
import MainRouter from "./Router/MainRouter";
import { reducer, initialState } from "./Reducer/userReducer";

export const UserContext = React.createContext();
const Routing = () => {
  const history = useHistory();
  console.log(history);
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    }
  }, []);
  return <MainRouter />;
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
