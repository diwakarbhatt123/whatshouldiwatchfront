import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Content from './component/content-component/Content';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Content}/>
                    <Route path="/home" component={Content}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Content/>
                <About/>
            </div>
        );
    }
}

export default App;
