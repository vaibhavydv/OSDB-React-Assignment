import React from 'react';
import Header from './header/Header';
import BreakingNews from './homepage/breaking-news/breakingNews';
import TrendingPlayers from './homepage/trending-players/trendingPlayers';
import FactOfTheDay from './homepage/fact-otd/factOfTheDay';
import Footer from './osdbFooter/footer';
function App() {
  return (
    <>
    <Header/>
    <BreakingNews/>
    <TrendingPlayers />
    <FactOfTheDay />
    <Footer />
    </>
  );
}

export default App;
