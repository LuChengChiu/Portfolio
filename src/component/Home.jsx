import React from "react";
import photo from "../assets/IDPhoto_LuChengChiu.jpg";
import "../App.css";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="page flex items-center justify-around px-40 pt-28 lg:px-20 md:px-10 tb:flex-col tb:py-14 tb:px-0 sm:flex-col sm:py-10 sm:px-2"
      >
        <div className="font-TC enter">
          <h1 className="font-bold xl:text-6xl lg:text-5xl tb:text-4xl sm:text-2xl">
            Hi! I'm <br />{" "}
            <span className="xl:text-5xl lg:text-4xl md:text-3xl">
              Lu-Cheng Chiu 邱律誠.
            </span>
          </h1>
          <p className="xl:text-2xl mt-5 tb:text-2xl tb:tracking-tight sm:my-3">
            持續努力成為更好、更全面的前端工程師.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 border-8 border-primary rounded-xl font-TC tb:p-3 tb:my-14 sm:p-2 sm:mt-3">
          <img
            src={photo}
            alt="證件照"
            className="xl:w-96 lg:w-80 md:w-72 rounded-lg mb-4 tb:w-80 sm:w-64"
          />
          <ul className="xl:text-lg tb:text-base sm:text-sm">
            <li>
              <span className="font-bold">學歷:</span> 臺灣科技大學
            </li>
            <li>
              <span className="font-bold">主:</span> 企業管理系,
              <span className="font-bold"> 輔:</span> 財務金融系
            </li>
            <li className="mt-2 font-bold">主要技能:</li>
            <li>React, JavaScript, HTML, CSS, MySQL</li>
          </ul>
        </div>
      </section>
    </>
  );
}
