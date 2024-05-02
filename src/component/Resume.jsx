import React from "react";
import { NavLink } from "react-router-dom";
import idPhoto from "../assets/IDPhoto_2inches_LuChengChiu.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
export default function Resume() {
  return (
    <>
      <section id="resume" className="resume tb:p-4 sm:p-4">
        <div className="w-8/12 lg:w-10/12 md:w-11/12 tb:w-screen tb:flex-col sm:w-screen sm:flex-col">
          <div className="resume-card lg:left-4 md:left-3 tb:top-5 tb:left-0 tb:relative tb:flex-row tb:before:border-0 sm:top-0 sm:left-0 sm:relative sm:flex-row sm:before:border-0">
            <img
              src={idPhoto}
              alt="證件照"
              className="w-54 rounded-xl mb-3 md:w-40 tb:mr-5 tb:w-44 sm:mr-3 sm:w-40"
            />
            <div>
              <div className="tb:mb-2">
                <span className="m my-4 text-xl font-bold md:text-lg tb:text-2xl sm:text-xl">
                  Lu-Cheng Chiu{" "}
                  <span className="tb:block sm:block">邱律誠</span>
                </span>
              </div>
              <ul className="font-Lora tb:text-lg sm:text-sm">
                <li className="font-bold md:text-base tb:text-xl tb:mb-1 sm:text-base sm:mb-1">
                  Contact
                </li>
                <li>
                  <FontAwesomeIcon icon={fas.faPhone} /> 0931999597
                </li>
                <li>
                  <FontAwesomeIcon icon={fas.faEnvelope} />{" "}
                  <span className=" tracking-tighter">
                    lucheng.chiu0501@gmail.com
                  </span>
                </li>
                <li>
                  <a href="https://github.com/LuChengChiu">
                    <FontAwesomeIcon icon={fab.faGithub} /> LuChengChiu
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-background text-lg rounded-2xl flex flex-col justify-center py-7 pl-48 lg:pl-32 md:pl-16 md:text-sm tb:pl-0 tb:text-base tb:rounded-none sm:pl-0 sm:text-xs sm:rounded-none sm:pt-0">
            <div className="flex content-between md:pl-32 tb:pl-0 sm:pl-0">
              <div className="mr-4 lg:mr-0 md:mr-0 tb:mr-0 sm:mr-0">
                <div className="part">
                  <h2 className="resume-title dark:text-accent md:text-xl tb:text-xl sm:text-lg">
                    學歷
                  </h2>
                  <ul className="leading-7">
                    <li>
                      台北市立松山家商{" "}
                      <span className="tb:block sm:block tb:ml-1 sm:ml-1">
                        資料處理科
                      </span>
                    </li>
                    <li>
                      國立臺灣科技大學
                      <br />{" "}
                      <span className="mr-3">
                        <span className="font-bold tb:ml-1 sm:ml-1">主:</span>
                        企業管理系
                      </span>
                      <span className="tb:block sm:block tb:ml-1 sm:ml-1">
                        <span className="font-bold">輔:</span>財務金融系
                      </span>
                    </li>
                    <li>
                      塔林科技大學
                      <span className="tb:block sm:block tb:ml-1 sm:ml-1">
                        {" "}
                        企業管理系(交換)
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="part">
                  <h2 className="resume-title dark:text-accent md:text-xl tb:text-xl sm:text-lg">
                    技能
                  </h2>
                  <div className="flex justify-start ">
                    <div className="pr-5 lg:pr-1 tb:pr-0 sm:pr-0">
                      <h3 className="text-lg md:text-base tb:text-base sm:text-sm">
                        網頁前端
                      </h3>
                      <ul className="font-Lora sm:mt-2">
                        <li>React</li>
                        <li>JavaSCript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Tailwind CSS</li>
                        <li>Bootstrap</li>
                        <li>SASS/SCSS</li>
                      </ul>
                    </div>
                    <div className="pl-3 sm:pl-1">
                      <h3 className="text-lg md:text-base tb:text-base sm:text-sm sm:tracking-tighter">
                        後端<span className=" sm:block">&資料庫</span>
                      </h3>
                      <ul className="font-Lora">
                        <li>NodeJS</li>
                        <li>MySQL</li>
                        <li>Git/Github</li>
                      </ul>
                      <h3 className="text-lg md:text-base tb:text-base sm:text-sm">
                        設計工具
                      </h3>
                      <ul className="font-Lora">
                        <li>Figma</li>
                        <li>Photoshop</li>
                        <li>Premiere</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="part lg:pr-0 sm:pr-0 sm:leading-5">
                <h2 className="resume-title dark:text-accent md:text-xl tb:text-xl sm:text-lg  ">
                  證照
                </h2>
                <ul>
                  <li className="my-1 text-xl font-bold md:text-base tb:text-lg sm:text-base">
                    程式
                  </li>
                  <li className="font-Lora">Meta Front-End Developer</li>
                </ul>
                <ul className="sm:leading-6">
                  <li className="my-1 text-xl font-bold md:text-base tb:text-lg sm:text-base">
                    金融
                  </li>
                  <li>證券商業務員</li>
                  <li>證券商高級業務員</li>
                  <li>金融市場常識與職業道德</li>
                </ul>
                <ul className="sm:leading-6">
                  <li className="my-1 text-xl font-bold md:text-base tb:text-lg sm:text-base">
                    行銷與專案
                  </li>
                  <li>Google Project Management</li>
                  <li className="tracking-tighter">
                    Facebook Certified Digital Marketing Associate
                  </li>
                  <li className="">Google Digital Garage</li>
                </ul>
                <ul>
                  <li className="my-1 text-xl font-bold md:text-base sm:text-base tb:text-lg">
                    語言
                  </li>
                  <li className="font-Lora">TOEIC 930</li>
                  <li className="font-Lora">Linguaskill Business 180</li>
                </ul>
              </div>{" "}
            </div>
            <div className="part w-10/12 lg:w-11/12 md:w-full tb:w-full sm-full">
              <h2 className="resume-title dark:text-accent md:text-lg tb:text-xl sm:text-lg">
                工作經歷
              </h2>
              <ul>
                <li className="mb-2">
                  <header className="flex justify-between tb:flex-col sm:flex-col">
                    <h3 className="text-xl font-bold md:text-base tb:text-base sm:text-base">
                      薩摩亞商竣邦國際股份有限公司
                      <span className="ml-11 role-line sm:text-sm sm:ml-5 sm:before:w-3 sm:before:-left-4">
                        實習生
                      </span>
                    </h3>
                    <span className="font-Lora ">Sep 2021 - Jan 2022</span>
                  </header>
                  <ul className="list-[square] pl-6 mt-1">
                    <li>
                      負責每月公司營運報表產出，供各部門主管的了解公司營運狀況。
                    </li>
                    <li>
                      追蹤產業最新技術資料與趨勢，製作產業報告予主管規劃決策用。
                    </li>
                    <li>進行客戶接洽，討論訂單的需求與問題處理。</li>
                    <li>追蹤與管理部門的KPI進度。</li>
                    <li>企劃案的發想、撰寫與規劃。</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <header className="flex justify-between tb:flex-col sm:flex-col">
                    <h3 className="text-xl font-bold md:text-base tb:text-base sm:text-base">
                      國立台灣科技大學-管理學院
                      <span className="ml-11 role-line sm:text-sm sm:ml-5 sm:before:w-3 sm:before:-left-4">
                        工讀生
                      </span>
                    </h3>
                    <span className="font-Lora">Sep 2020 - Feb 2021</span>
                  </header>
                  <ul className="list-[square] pl-6 mt-1">
                    <li>分類、審核文件資料，並輸入建檔。</li>
                    <li>文件之維護、更新、管理各類文件檔案。</li>
                  </ul>
                </li>
                <li>
                  <header className="flex justify-between tb:flex-col sm:flex-col">
                    <h3 className="text-xl font-bold md:text-base tb:text-base sm:text-base">
                      北一文教機構
                      <span className="ml-11 role-line sm:text-sm sm:ml-5 sm:before:w-3 sm:before:-left-4">
                        輔導老師
                      </span>
                    </h3>
                    <span className="font-Lora">May 2018 - Aug 2018</span>
                  </header>
                  <ul className="list-[square] pl-6 mt-1">
                    <li>學生教材準備</li>
                    <li>輔導學生課業</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="part w-10/12 md:w-full tb:w-full sm:w-full">
              <h2 className="resume-title dark:text-accent md:text-lg tb:text-xl sm:text-lg">
                關於我
              </h2>
              <p>
                您好! 我是邱律誠，具強烈好奇心、樂於學習、追求持續成長的人！
                學士畢業於臺灣科技大學企業管理系，除了主修企管外，我還有輔修財務金融，大學期間參與企管系學會並擔任證券研究社的幹部，辦過各式活動，其中不乏與企業間的合作以及人數破百的活動，使我具備溝通協商技巧與良好的團隊合作能力，因為想擴展自己的視野、向生長在不同環境的人學習，於是延畢一學期參與交換學生計畫，前往歐洲學習半年，透過交換的經驗，使我交際的能力有所提升，同時也讓我思考時能考慮到更多面向，綜合以上經驗，相較於他人，我更能提供創新、跨文化及團隊協作之能力!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
