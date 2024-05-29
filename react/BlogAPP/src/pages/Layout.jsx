import { Outlet, Link } from "react-router-dom";
import BlogHeader from "../components/BlogHeader";

const Layout = () => {
  return (
    <div className="container mx-auto px-4 my-4 max-w-screen-lg">
      <BlogHeader />
      <Outlet />
    </div>
  );
};
export default Layout;
