import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home/index'
import StuSys from './pages/stu-system/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/stusys' component={StuSys} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
