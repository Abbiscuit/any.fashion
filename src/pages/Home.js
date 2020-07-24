import React from 'react';
import Header from '../components/Header';
import CampaignBanner from '../components/CampaignBanner';
import ProductsList from '../components/ProductsList';

const Home = () => {
  return (
    <div>
      <Header />
      <CampaignBanner />
      <ProductsList />
    </div>
  );
};

export default Home;
