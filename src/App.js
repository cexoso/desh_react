import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,Route
} from 'react-router-dom';

import RaceInfo from './pages/RaceInfo';
import NewsInfo from './pages/NewsInfo';
import PlayerInfo from './pages/PlayerInfo';
import GameInfo from './pages/GameInfo';
import SubRace from './pages/SideRace';
import Download from './pages/Download';
import PaySuccess from './pages/PaySuccess';
import PayFail from './pages/PayFail';
import activitiesInfo from './pages/activitiesInfo';

import SharePage from './pages/SharePage';

class App extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Route exact path="/race/:id/:lang" component={RaceInfo}/>

                    <Route path="/loadApp" component={Download}/>
                    <Route path="/news/:id/:lang" component={NewsInfo}/>
                    <Route path="/rankPlayer/:id/:lang" component={PlayerInfo}/>
                    <Route path="/rankGame/:id/:lang" component={GameInfo}/>
                    <Route path="/race/:id/:lang/sidedetail/:subId" component={SubRace}/>
                    <Route path="/pay/success" component={PaySuccess}/>
                    <Route path="/pay/fail" component={PayFail}/>

                    <Route path="/sharePage" component={SharePage}/>
                    <Route path="/activities/:id/:lang" component={activitiesInfo}/>
                    <Route path="/race/:id/:lang/loadAPP" component={Download}/>

                </div>
            </Router>
        );
    }
}

export default App;



