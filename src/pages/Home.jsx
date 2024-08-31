import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <h1 className="font-bold text-7xl text-blue-950 text-center mb-2">
        Doot Guitar
      </h1>
      <p className="mt-8 mb-10 text-blue-950 text-3xl text-center">
        กีตาร์ราคาถูกมากมายให้เลือกชม
      </p>

      <div className="flex justify-center">
        <img className="w-1/2 rounded-full"
          src="https://danvillemusic.com/cdn/shop/articles/the-best-places-to-buy-guitars-sm.jpg?v=1651153977"
          alt=""
        />
      </div>
    </Layout>
  );
};

export default Home;
