import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';


import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import StyledWrapper from './StyledWrapper';
import StyledLogin from './StyledLogin';
import Transactions from './NestedPages/Transactions/Transactions';
import Notes from './NestedPages/Notes/Notes';
import Settings from './NestedPages/Settings/Settings';

const Account = () => {
    return(
        <StyledViewWrapper>
            <StyledWrapper>
            <div className="flex">
                <nav>
                    <StyledLogin>MagicianPL</StyledLogin>
                    <ul>
                        <li><Link to="/account/transactions">Transakcje</Link></li>
                        <li><Link to="/account/notes">Notatki</Link></li>
                        <li><Link to="/account/settings">Ustawienia</Link></li>
                        <li>Generuj link</li>
                    </ul>
                </nav>
                <div>
                    <Routes>
                        <Route path="/transactions" element={<Transactions />} />
                        <Route path="/notes" element={<Notes />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
            </StyledWrapper>
        </StyledViewWrapper>
    );
};

export default Account;