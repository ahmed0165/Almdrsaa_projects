// About.jsx
import React from "react";
import OurStory from "../components/OurStory";
import Statistics from "../components/Statistics";
import TeamMember from "../components/TeamMember";
import Features from "../components/Features";

const About = () => {
  return (
    <div className="container mx-auto my-8 max-w-screen-lg px-4">
      <OurStory />
      <Statistics />
      <TeamMember />
      <Features />
    </div>
  );
};

export default About;
