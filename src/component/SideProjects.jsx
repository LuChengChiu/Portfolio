import React from "react";
import titaniumImg from "../assets/titanium_img.jfif";
import portfolio from "../assets/IDPhoto_LuChengChiu.jpg";
import foodMap from "../assets/foodmap_screenshot.png";
export default function SideProjects() {
  return (
    <>
      <section
        id="side-projects"
        className="pt-28 pb-20 w-screen w-dvw flex flex-col items-center"
      >
        <h1 className="font-Lora font-bold capitalize text-5xl mb-16 tb:text-4xl sm:text-4xl">
          side projects
        </h1>
        <div className="w-full flex justify-center tb:flex-col tb:items-center sm:flex-col sm:items-center">
          <div class="relative w-72 rounded-xl overflow-hidden m-3 aspect-square tb:w-80">
            <img
              class="w-full h-full object-cover"
              src={foodMap}
              alt="Your image"
            />
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-opacity duration-1000 ease-in-out text-white project-card">
              <span className="font-TC text-3xl text-center leading-10">
                食物地圖
                <span className="font-Rubik font-bold uppercase block">
                  Eat What?
                </span>
              </span>
              <a
                href="https://eatwhat-foodmap.vercel.app/"
                target="_blank"
                className="absolute bottom-10 text-xl capitalize font-Lora border py-1 w-48 rounded-3xl transition-all duration-300 ease-in-out opacity-0 flex items-center justify-center"
              >
                visite website{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  className="inline ml-1"
                >
                  <path
                    fill="currentColor"
                    d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="relative w-72 rounded-xl overflow-hidden m-3 aspect-square tb:w-80">
            <img
              class="w-full h-full object-cover"
              src={titaniumImg}
              alt="Your image"
            />
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-opacity duration-1000 ease-in-out text-white project-card">
              <span className="font-TC text-3xl text-center leading-10">
                電商網站
                <span className="font-Rubik font-bold uppercase block">
                  Titanium
                </span>
              </span>
              <a
                href="https://titanium.zeabur.app/"
                target="_blank"
                className="absolute bottom-10 text-xl capitalize font-Lora border py-1 w-48 rounded-3xl transition-all duration-300 ease-in-out opacity-0 flex items-center justify-center"
              >
                visite website{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  className="inline ml-1"
                >
                  <path
                    fill="currentColor"
                    d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="relative w-72  rounded-xl overflow-hidden m-3 aspect-square tb:w-80">
            <img
              class="w-full h-full object-cover"
              src={portfolio}
              alt="Your image"
            />
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-opacity duration-1000 ease-in-out text-white project-card">
              <span className="font-TC text-3xl text-center leading-10">
                個人網站
                <span className="font-Rubik font-bold block">LuCheng Chiu</span>
              </span>
              <a
                href="https://luchengchiu.zeabur.app/sideProjects"
                target="_blank"
                className="absolute bottom-10 text-xl capitalize font-Lora border py-1 w-48 rounded-3xl transition-all duration-300 ease-in-out opacity-0 flex items-center justify-center"
              >
                visite website{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  className="inline ml-1"
                >
                  <path
                    fill="currentColor"
                    d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
