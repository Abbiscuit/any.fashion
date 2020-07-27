import React from 'react';
import Header from '../components/Header';
import CampaignBanner from '../components/CampaignBanner';
import ProductsList from '../components/ProductsList';

const Home = ({ currentUser }) => {
  return (
    <div>
      <Header isSearch isUserExist={currentUser} />
      <CampaignBanner />
      <ProductsList />
    </div>
  );
};

export default Home;
