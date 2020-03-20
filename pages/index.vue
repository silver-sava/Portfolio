<template>
  <div>
    <Topbar/>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Services/>
    <Portfolio/>
    <Timeline/>
    <Counter/>
    <Team/>
    <Testimonials/>
    <News/>
    <Action/>
    <Contact/>


    <Footer/>
  </div>
</template>

<script>

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Timeline from "../components/Timeline";
import Counter from "../components/Counter";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import News from "../components/News";
import Action from "../components/Action";
import Contact from "../components/Contact";

export default {
  components: {
    Contact,
    Action,
    News,
    Testimonials,
    Team,
    Counter,
    Timeline,
    Portfolio,
    Services,
    About,
    Footer,
    HeroSection,
    Navbar,
    Topbar,
  },
}
</script>

<style>

</style>
