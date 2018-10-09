import React from "react";

import { LoginButton } from "./ESI/LoginButton";
import { StatsContainer }from "./StatsContainer";

import './App.css';

const App = ({ token, characterId }) => (
    <div className="App">
        <header className="App-header">
            <LoginButton />
        </header>
        <div className="Body">
            {token && characterId && 
                <StatsContainer /> 
            }
        </div>
    </div>
);

export default App;
