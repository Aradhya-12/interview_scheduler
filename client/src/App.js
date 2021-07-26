import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import SideNavigation from './components/sideNav';
import CreateInterview from './components/CreateInterview';
import UpdateInterview from './components/UpdateInterview';
import ViewInterview from './components/ViewInterview';



function App() {
  return (
    <div className="App">
      <HashRouter>
        <SideNavigation>
        <Switch>
          <Route exact path='/'  component={CreateInterview}/>
          <Route path='/view-interview' component={ViewInterview}/>
          <Route path='/update-interview' component={UpdateInterview}/>   
        </Switch>
        </SideNavigation>
      </HashRouter>
    </div>
  );
}

export default App;

