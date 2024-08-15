import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitialScreen from '../components/screens/initial-screen/initial-screen';
import AddPlayers from '../components/screens/add-players/add-players';
import SavePlayer from '../components/screens/save-player/save-player';
import ReavealScreen from '../components/screens/reveal-screen/reaveal-screen';
import Round1 from '../components/screens/round1/round1';
import Round2 from '../components/screens/round2/round2';
import Discussion from '../components/screens/discussion/discussion';
import Voting from '../components/screens/voting/voting';
import Guess from '../components/screens/impostor-guess/impostor-guess';
import Results from '../components/screens/results/results';

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
                <Route path="/round1" element={<Round1 />} />
                <Route path="/round2" element={<Round2 />} />
                <Route path="/discussion" element={<Discussion />} />
                <Route path="/voting" element={<Voting />} />
                <Route path="/guess" element={<Guess />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
