import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import { baseUrl } from "../baseUrl";
import Footer from "../components/Footer";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedblog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedblog(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div className="w-10/12 max-w-[700px] mx-auto mt-[110px] mb-[70px]">
        <div className="ml-[60px]">
          <button onClick={() => navigation(-1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md mb-5"
            >Back</button>
        </div>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : blog ? (
            <div>
              <BlogDetails post={blog} />
              <h2 className="mt-[50px] font-extrabold text-3xl ml-[60px] mb-7">Releated Blogs</h2>
              {relatedblog.map((post) => (
                <div key={post.id} className="my-[30px]">
                  <BlogDetails post={post} />
                </div>
              ))}
            </div>
          ) : (
            <p className="font-bold text-lg">No Blog Found</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
