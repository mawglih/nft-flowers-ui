import { Route, Switch } from "react-router-dom";
import Home from "./regular/Home";

const Routes = () => {
    return (
        <Switch>
            <Route path="/home" component={Home}/>
            <Route exact path="/" component={Home}></Route>
        </Switch>
    )
}

export default Routes;
