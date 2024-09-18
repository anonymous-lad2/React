import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './pages/Home';
import TagPage from './pages/TagPage';
import BlogPage from './pages/BlogPage';
import CategoryPage from './pages/CategoryPage';

function App() {

  const {fetchData} = useContext(AppContext)
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation()

  useEffect(() => {
    // // Fetch the inital Blogposts data
    // fetchBlogPosts();
    // // eslint-disable-next-line react-hooks/exhaustive-deps

    const page = searchParams.get('page') ?? 1;
    if(location.pathname.includes("tags")){
      // Tag Page 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchData(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchData(Number(page),null,category);
    }
    else{
      fetchData(Number(page))
    }
  }, [location.pathname,location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage /> } />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;
