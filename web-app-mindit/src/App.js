import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SingUpPage from './pages/SingupPage';
import InvestorHomePage from './pages/Investor/Home';
import EmpretreunerHomePage from './pages/Empretreuner/Home';

import { isLoggged } from './services/login.service';

const PrivateRoute = (props) => {
  return isLoggged() ? <Route {...props}/> : <Redirect to="/"/> 
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/singUp" component={SingUpPage}/>
        <PrivateRoute path="/investor" component={InvestorHomePage}/>
        <PrivateRoute path="/empretreuner" component={EmpretreunerHomePage}/>
        <Route path="*">
          <h1>Essa página não existe</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
