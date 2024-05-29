// TeamMember.jsx
import React from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
// import person2 from "../assets/person2.png";

const teamMembers = [
  {
    name: "Tom Cruise",
    role: "Support Executive",
    imgSrc: person1,
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    imgSrc: person2,
  },
  {
    name: "Will Smith",
    role: "Product Manager",
    imgSrc: person2,
  },
];

const TeamMember = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="text-center">
          <img
            src={member.imgSrc}
            alt={member.name}
            className="w-full rounded-md mb-4 h-[350px] overflow-hidden flex items-center justify-center"
          />
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMember;
