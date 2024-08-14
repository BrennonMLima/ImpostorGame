import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitialScreen from '../components/screens/initial-screen/initial-screen';
import AddPlayers from '../components/screens/add-players/add-players';
import SavePlayer from '../components/screens/save-player/save-player';
import ReavealScreen from '../components/screens/reveal-screen/reaveal-screen';

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
                <Route path="/reveal" element={<ReavealScreen />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
