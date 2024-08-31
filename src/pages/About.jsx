import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <h1 className="font-bold text-7xl text-blue-950 text-center mb-2">
        About US
      </h1>
      <h2 className="text-center font-bold text-2xl">กีตาร์มากมายแนะนำสำหรับคุณ!</h2>
      <hr />

      <div className="flex flex-wrap justify-center space-x-4 ">
        <div className="card max-w-sm shadow-md bg-white p-5 mb-2">
          <img
            src="https://www.musicarms.net/wp-content/uploads/2019/11/Face-cover-Gusta-GDX110C-MN-300x300.jpg"
            alt=""
          />
          <p className="text-xl">กีตาร์โปร่งไฟฟ้า</p>
          <button className="p-2 text-white bg-gray-400 rounded-md">
            ดูเพิ่มเติม
          </button>
        </div>
        <div className="card max-w-sm shadow-md bg-white p-5 mb-2">
          <img
            src="https://www.musicarms.net/wp-content/uploads/2013/01/Yamaha-F310-%E0%B8%81%E0%B8%B5%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%88%E0%B8%87-music-arms-300x300.jpg"
            alt=""
          />
          <p className="text-xl">กีตาร์โปร่ง</p>
          <button className="p-2 text-white bg-gray-400 rounded-md">
            ดูเพิ่มเติม
          </button>
        </div>
        <div className="card max-w-sm shadow-md bg-white p-5 mb-2">
          <img
            src="https://www.musicarms.net/wp-content/uploads/2024/08/IBANEZ-RGA42FML-300x300.jpg"
            alt=""
          />
          <p className="text-xl">กีตาร์ไฟฟ้า</p>
          <button className="p-2 text-white bg-gray-400 rounded-md">
            ดูเพิ่มเติม
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default About;
