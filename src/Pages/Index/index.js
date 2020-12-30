//React
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Hoc
import AuthGuard from "../../Hoc/authGuard";
import ProfilePage from "../Profile/profile";

//Pages
import SignIn from "../SignInUser/signin";
import Homepage from "../Homepage/homepage";
import CreateEvent from "../CreateEvent/createEvent.js";
import Maps from "../../Components/Maps/maps.js";
import MapTwo from "../../Components/Map/map.js";
import GetAllEvents from "../Events/events.js";
import BootcamperProfilePage from "../BootcamperProfile/Bootcamper";

//Components
import { user } from "../../Components/userData";
import NavBar from "../../Components/NavBar/nav";

//Context
import { useProfileContext } from "../../Context/profileContext";

export default function Index() {
  const [profile] = useProfileContext();

  return (
    <Router>
      <NavBar />
      <Switch>
        <AuthGuard component={Homepage} path={"/"} props={user} exact />
        <Route path="/login" component={SignIn}></Route>
        <AuthGuard
          component={ProfilePage}
          path={"/profile"}
          props={user}
          exact
        />
        <AuthGuard
          component={CreateEvent}
          path={"/CreateEvent"}
          props={user}
          exact
        />
        <AuthGuard
          component={GetAllEvents}
          path={"/events"}
          props={user}
          exact
        />
        <Route path={"/bootcamper"} exact>
          <BootcamperProfilePage profile={profile} />
        </Route>

        {/* For Development Purposes */}

        {/* <AuthGuard component={MapTwo} path={"/mapTwo"} props={user} exact /> */}
      </Switch>
    </Router>
  );
}
