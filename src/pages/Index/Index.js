import React from "react";
import CourseAndPollSection from "../../Components/CourseAndPollSection/CourseAndPollSection";
import Footer from "../../Components/Footer/Footer";
import HeroHeader from "../../Components/HeroHeader/HeroHeader";
import MainContent from "../../Components/MainContent/MainContent";
import Menu from "../../Components/Menu/Menu";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import NewTopic from "../../Components/NewTopic/NewTopic";
import SideMenu from "../../Components/SideMenu/SideMenu";
import SliderInfo from "../../Components/SliderInfo/SliderInfo";
import Topbar from "../../Components/Topbar/Topbar";

export default function Index() {
  return (
    <>
      {/* <SideMenu /> */}
      <Topbar />
      <Menu />
      <HeroHeader />
      <SliderInfo />
      <NewTopic />
      <MainContent />
      <CourseAndPollSection />
      <Footer />
    </>
  );
}
