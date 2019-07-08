import React from 'react';
import Header from './header/Header';
import BreakingNews from './homepage/breaking-news/breakingNews';
import TrendingPlayers from './homepage/trending-players/trendingPlayers';
import FactOfTheDay from './homepage/fact-otd/factOfTheDay';
import Footer from './osdbFooter/footer';
import NewsOsdb from './homepage/trending-news/trendingNews';
import HomeVideos from './homepage/videos/videos';
function App() {
  return (
    <>
    {/* <Header/>
    <BreakingNews/>
    <TrendingPlayers />
    <FactOfTheDay /> 
    <NewsOsdb /> */}
    <HomeVideos />
    {/* <Footer /> */}
    </>
  );
}

export default App;
