import React from 'react';
import Header from './header/Header';
import BreakingNews from './homepage/breaking-news/breakingNews';
import SocialShare from './homepage/social/socialShare';
import TrendingPlayers from './homepage/trending-players/trendingPlayers';
import FactOfTheDay from './homepage/fact-otd/factOfTheDay';
import Footer from './osdbFooter/footer';
import NewsOsdb from './homepage/trending-news/trendingNews';
import HomeVideos from './homepage/videos/videos';
import Poll from './homepage/poll-twitter/pollTwitter';
function App() {
  return (
    <>  
    <Header/>
    <BreakingNews/>
    <SocialShare/>
    <TrendingPlayers />
    <FactOfTheDay />
    <NewsOsdb />
    <HomeVideos />
    <Poll/>
    <Footer />
    </>
  );
}

export default App;
