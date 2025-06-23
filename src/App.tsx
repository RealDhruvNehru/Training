import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DayPage from './pages/DayPage';
import QuotesPage from './pages/QuotesPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/:dayId" element={<DayPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;