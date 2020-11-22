import NavBar from "./components/navbar/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css";
import styles from "./styles/app.module.css";
import Profile from "./components/profile/profile";
import Menu from "./components/header/menu";
import MyNotes from "./components/allNotes/myNotes";

function App(props) {
  return (
    <Router>
      <div className={styles.wrapper}>
        <NavBar />
        <div className={styles.content}>
          <Menu />
          <Switch>
            <Route
              exact
              path="/second-project"
              render={() => <Profile data={props.data} />}
            />
            <Route
              path="/myNotes"
              render={() => <MyNotes data={props.data} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
