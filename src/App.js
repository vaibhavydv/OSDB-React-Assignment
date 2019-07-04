import React from 'react';
import Header from './header/Header';
import BreakingNews from './homepage/breaking-news/breakingNews';
import TrendingPlayers from './homepage/trending-players/trendingPlayers';

function App() {
  return (
    <>
    <Header/>
    <BreakingNews/>
    <TrendingPlayers />
    </>
  );
}

export default App;
