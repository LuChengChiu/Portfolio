import React, { useEffect } from "react";
import gownImg from "../assets/gown_LuChengChiu.jpg";
import person from "../assets/person.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
export default function About() {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -250px 0px",
    };
    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);
    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
    return () => {
      faders.forEach((fader) => {
        appearOnScroll.unobserve(fader);
      });
      sliders.forEach((slider) => {
        appearOnScroll.unobserve(slider);
      });
    };
  }, []);

  return (
    <>
      <section
        id="aboutme"
        className="flex flex-col items-center justify-start w-screen py-5"
      >
        <div className="about-section flex-col section-line tb:px-10 sm:px-10 enter">
          <div className="relative ">
            <h1 className="text-6xl font-Lora font-bold about-line tb:text-5xl sm:text-4xl">
              About me.{" "}
              <span className=" right-0 top-3 text-3xl tb:text-2xl sm:text-xl">
                邱律誠
              </span>
            </h1>
          </div>
          <p className="text-2xl w-10/12 mt-12 tb:text-lg tb:w-11/12 sm:text-lg">
            我善於溝通與團隊合作、適應能力強、熱愛學習，擅長的程式語言有HTML,
            CSS, JavaScript，使用React作為前端的框架.
          </p>
        </div>
        <div className="about-section bg-blue-700/85 text-white flex justify-around items-center md:px-16 tb:px-14 tb:flex-col sm:flex-col sm:px-12">
          <div className="flex-col w-3/6 tb:w-full tb:mt-16 sm:w-full sm:mt-16 fade-in">
            <h2 className="about-section-title text-4xl about-line lg:text-3xl md:text-2xl tb:text-2xl sm:text-xl">
              About school life
            </h2>
            <p className="font-TC text-xl md:text-lg tb:text-base sm:text-sm sm:leading-5">
              學士畢業於臺灣科技大學，主修企業管理，輔修財務金融，因為對國外的好奇，延畢一學期參與歐洲交換計畫，因此使我的交際能力提升，適應力也近一步變強，也讓我的思考方式更開闊；大學期間參與系學會，並擔任證券研究社的幹部，舉辦各式活動，其中不乏與企業間合作以及人數近百的活動，使我擅長溝通協調，與良好的團隊合作能力。
            </p>
          </div>
          <div className="img-frame tb:-top-7 from-right slide-in">
            <img
              src={gownImg}
              alt="學士服照片"
              className="w-96 my-10 ml-5 md:w-80 tb:w-56 sm:w-48"
            />
          </div>
        </div>
        <div className="flex items-center justify-around about-section md:px-16 tb:px-10 tb:flex-col-reverse sm:flex-col-reverse sm:px-10">
          <div className="enter flex text-8xl relative mr-20 tb:text-6xl tb:justify-center tb:left-5 sm:text-5xl sm:left-7 from-left slide-in">
            <FontAwesomeIcon
              icon={fas.faCode}
              className="absolute top-20 -left-5 icon-animate"
            />{" "}
            <FontAwesomeIcon
              icon={fas.faLanguage}
              className="absolute -top-16 left-12 icon-animate icon-animate-fast"
            />
            <FontAwesomeIcon
              icon={fas.faDumbbell}
              className="absolute -top-6 left-56 icon-animate icon-animate-slow tb:left-44 sm:left-40"
            />
            <img
              src={person}
              className="w-80 relative top-10 tb:w-64 sm:w-52"
            />
          </div>
          <div className="flex-col w-3/6 pl-5 tb:pl-2 tb:w-full sm:w-full sm:pl-0 fade-in">
            <h2 className="about-section-title about-line text-4xl lg:text-3xl md:text-2xl tb:text-2xl sm:text-xl">
              Personal
            </h2>
            <p className="font-TC text-xl tb:text-base sm:text-sm sm:leading-6">
              樂於學習新事物的我，平常除了會利用網路資源研究程式語言外，還會透過線上課程學習與獲得證照，像是透過Coursera平台獲取Meta
              Front-End
              Developer證照，以及學習英語和韓文，目前正在準備英文TOEFL與韓文TOPIK的證照中，休閒興趣則是喜歡健身，很享受努力就能看見成果的感覺。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
