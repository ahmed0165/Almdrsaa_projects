import BlogCard from "./BlogCard";
import rectangle38 from "../assets/Rectangle 38.png";
import rectangle39 from "../assets/Rectangle 39.png";
import rectangle40 from "../assets/Rectangle 40.png";
import rectangle41 from "../assets/Rectangle 41.png";
import rectangle42 from "../assets/Rectangle 42.png";
import rectangle43 from "../assets/Rectangle 43.png";
import rectangle44 from "../assets/Rectangle 44.png";
import rectangle45 from "../assets/Rectangle 45.png";
import TraceyWilson from "../assets/Tracey Wilson.png";
import elizabith from "../assets/elizabith.png";
import erniesmith from "../assets/erniesmith.png";
import jason from "../assets/jason.png";
import LoadButton from "../components/LoadButton";
const BlogList = () => {
  return (
    <div>
      <div className="grid grid-cols-3  gap-3 mt-11 ">
        <BlogCard
          category="Technology"
          textContent="The Impact of Technology on the Workplace: How Technology is Changing"
          authorName="Tracey Wilson"
          date="August 20, 2022"
          authorImage={TraceyWilson}
          image={rectangle38}
        />
        <BlogCard
          image={rectangle39}
          authorImage={jason}
          category="Technology"
          textContent="The Impact of Technology on the Workplace: How Technology is Changing"
          authorName="Jason Francisco"
          date="August 20, 2022"
        />
        <BlogCard
          image={rectangle39}
          authorImage={elizabith}
          category="Technology"
          textContent="The Impact of Technology on the Workplace: How Technology is Changing"
          authorName="Elizabith Slaven"
          date="August 20, 2022"
        />
        <BlogCard
          image={rectangle40}
          authorImage={erniesmith}
          category="Technology"
          textContent="The Impact of Technology on the Workplace: How Technology is Changing"
          authorName="Ernie smith"
          date="August 20, 2022"
        />
        <BlogCard
          category="Technology"
          textContent="The Impact of Technology on the Workplace: How Technology is Changing"
          authorName="Tracey Wilson"
          date="August 20, 2022"
          authorImage={TraceyWilson}
          image={rectangle41}
        />
        <BlogCard
          image={rectangle42}
          authorImage={jason}
          category="Technology"
          textContent="The Impact of Technology on the Workplace: How Technology is Changing"
          authorName="Jason Francisco"
          date="August 20, 2022"
        />
        <BlogCard
          image={rectangle43}
          authorImage={elizabith}
          category="Technology"
          textContent="The Impact of Technology on the Workplace: How Technology is Changing"
          authorName="Elizabith Slaven"
          date="August 20, 2022"
        />
        <BlogCard
          image={rectangle44}
          authorImage={erniesmith}
          category="Technology"
          textContent="The Impact of Technology on the Workplace: How Technology is Changing"
          authorName="Ernie smith"
          date="August 20, 2022"
        />
        <BlogCard
          category="Technology"
          textContent="The Impact of Technology on the Workplace: How Technology is Changing"
          authorName="Tracey Wilson"
          date="August 20, 2022"
          authorImage={TraceyWilson}
          image={rectangle45}
        />
      </div>
      <LoadButton />
    </div>
  );
};
export default BlogList;
