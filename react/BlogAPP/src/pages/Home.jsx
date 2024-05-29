import BlogHeader from "../components/BlogHeader";
import BlogList from "../components/BlogList";
import { Outlet, Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      {/* <BlogHeader /> */}
      <BlogList />
    </>
  );
};

export default Home;
