import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

import store from './store/store'
import './App.css'
import Footer from './components/layout/Footer'

function App(){

  return(
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
            <Route exact="/" component={Landing}/>
          <div className="container" >
              <Route exact path ="/register" component={ Register }/>
              <Route exact path="/login" component={ Login }/>

          </div>
          <Footer/>
        </div>
      
      </BrowserRouter>
    </Provider>
  )
}
export default App