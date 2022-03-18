import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";
import Menu from "../../elements/menu/Menu";
import Flex from "../../basics/flex/Flex";
import styles from "./Routes.module.css";
import SkipRef from "../../basics/skipRef/SkipRef";

const Home = lazy(() => import("/src/components/pages/home/Home.jsx"));
const About = lazy(() => import("/src/components/pages/about/About.jsx"));
const Blog = lazy(() => import("/src/components/pages/blog/Blog.jsx"));
const BlogArticle = lazy(() => import("/src/components/pages/blog_article/BlogArticle.jsx"));
const NotFound = lazy(() => import("/src/components/pages/not_found/NotFound.jsx"));

function AppRoutes() {
  return (
    <>
      <SkipRef />
      <Flex extraClass={styles.menuFullWidth} >
        <Menu />
      </Flex>
      <Routes>
        <Route path="/blog/:id" element={<BlogArticle />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/*all" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
