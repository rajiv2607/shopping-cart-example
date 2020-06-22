import React from 'react'
import Dashboard  from "./Dashboard";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cart from './Cart'

class App extends React.Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
