import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitialScreen from '../screens/initial-screen/initial-screen';
import AddPlayers from '../screens/add-players/add-players';
import SavePlayer from '../screens/save-player/save-player';

interface RouterProps {

}

const AppRouter: React.FC<RouterProps> = ({

}) => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<InitialScreen />} />
                <Route path="/addplayers" element={<AddPlayers />} />
                <Route path="/saveplayer" element={<SavePlayer />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
