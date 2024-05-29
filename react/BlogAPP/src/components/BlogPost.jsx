import React from "react";
import BlogImage1 from "../assets/blogImage1.png";
import BlogImage2 from "../assets/blogImage2.png";
import imageIcon from "../assets/imageIcon.png";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
const BlogPost = (props) => {
  // const { image, authorImage, textContent, category, date, authorName } = props;

  const location = useLocation();
  const { textContent, category, date, authorName } = location.state || {};
  // console.log("Location state:", location.state);
  // console.log(textContent, category, date, authorName);

  return (
    <div className=" mt-12 mx-auto w-4/5">
      <div className="flex flex-col gap-3">
        <h5 className="text-white bg-[#4B6BFB] w-fit p-1 rounded-md text-center text-sm">
          {category}
        </h5>
        <p className=" text-2xl font-bold w-2/3 ">{textContent}</p>
        <footer className="flex gap-5 items-center">
          <div className="flex gap-2 items-center">
            <img src={imageIcon} alt="imageIcon" />
            <span className="text-[#97989F]">{authorName}</span>
          </div>
          <span className="text-[#97989F]">{date}</span>
        </footer>
      </div>
      <img className="w-2/3 mt-11 mb-11" src={BlogImage1} alt="author-img" />
      {/* <img src={image} alt="card-img" /> */}
      <div>
        <p className="w-2/3 text-[#3B3C4A]">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels. One of the most rewarding aspects of
          traveling is immersing yourself in the local culture and customs. This
          includes trying local cuisine, attending cultural events and
          festivals, and interacting with locals. Learning a few phrases in the
          local language can also go a long way in making connections and
          showing respect.
        </p>
        <h2 className="text-xl font-bold mt-5 mb-5">
          Research Your Destination
        </h2>
        <p className="w-2/3 text-[#3B3C4A]">
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non
          tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper
          sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing
          vitae. Viverra adipiscing at in tellus.
        </p>
        <h2 className="text-xl font-bold mt-5 mb-5">Plan Your Itinerary</h2>
        <p className="w-2/3 text-[#3B3C4A]">
          While it's essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax
          and enjoy your journey. Vitae sapien pellentesque habitant morbi
          tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper
          sit amet risus nullam eget felis. Tincidunt arcu non sodales neque
          sodales ut etiam sit amet.
        </p>
        <p className="w-2/3 text-[#3B3C4A] bg-[#E8E8EA]  p-5 rounded-md text-center text-sm mt-11 italic font-semibold">
          "Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy."
        </p>
        <img src={BlogImage2} alt="card-img" className="w-2/3 mt-11" />
        <div className="w-2/3  bg-[#E8E8EA]  p-5 rounded-md text-center text-sm mt-11 ">
          <h3 className="text-[#696A75]">Advertisement</h3>
          <h2 className="text-[#696A75] text-lg font-semibold">
            You can place ads
          </h2>
          <span className="text-[#696A75]">750x100</span>
        </div>
        <h2 className="text-xl font-bold mt-5 mb-5">
          Pack Lightly and Smartly
        </h2>
        <p className="w-2/3 text-[#3B3C4A]">
          Packing can be a daunting task, but with some careful planning and
          smart choices, you can pack light and efficiently. Start by making a
          packing list and sticking to it, focusing on versatile and comfortable
          clothing that can be mixed and matched. Invest in quality luggage and
          packing organizers to maximize space and minimize wrinkles.
        </p>
        <h2 className="text-xl font-bold mt-5 mb-5">Stay Safe and Healthy </h2>
        <p className="w-2/3 text-[#3B3C4A]">
          Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy.
          This includes researching any required vaccinations or medications,
          staying hydrated, washing your hands frequently, and using sunscreen
          and insect repellent. It's also essential to keep your valuables safe
          and secure and to be aware of your surroundings at all times.
        </p>
        <h2 className="text-xl font-bold mt-5 mb-5">
          Immerse Yourself in the Local Culture{" "}
        </h2>
        <p className="w-2/3 text-[#3B3C4A]">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
        <h2 className="text-xl font-bold mt-5 mb-5">Capture Memories </h2>
        <p className="w-2/3 text-[#3B3C4A]">
          Finally, don't forget to capture memories of your journey. Whether
          it's through photographs, journaling, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it's also essential to be present in the
          moment and not let technology distract you from the beauty of your
          surroundings.
        </p>
        <h2 className="text-xl font-bold mt-5 mb-5">Conclusion:</h2>
        <p className="w-2/3 text-[#3B3C4A] mb-16">
          Traveling is an art form that requires a blend of planning,
          preparation, and spontaneity. By following these tips and tricks, you
          can make the most of your journey and create memories that last a
          lifetime. So pack your bags, embrace the adventure, and enjoy the
          ride.
        </p>
      </div>
    </div>
  );
};
export default BlogPost;
