import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Make sure this is correct
import baseUrl from '../baseUrl';


export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [pages, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate()

    async function fetchData(pages = 1, tag = null, category) {
        setLoading(true);
        setLoading(true);
        let url = `${baseUrl}?page=${pages}`;
        if (tag) {
            url += `&tag=${tag}`;
        }
        if (category) {
          url += `&category=${category}`;
        }
        try {
            const data = await fetch(url)
            const response = await data.json()
            if (!response.posts || response.posts.length === 0)
                throw new Error("Something Went Wrong");
            console.log(response)
            setPages(response.page)
            setTotalPages(response.totalPages)
            setPosts(response.posts)
        }
        catch (error) {
            alert(error)
            setPages(1)
            setPosts([])
            setTotalPages(null)

        }
        setLoading(false);
    }

    const handlePageChange = (pages)=>{
        navigate({search: `?page=${pages}`})
        setPages(pages);
    }

    const value = {
        loading,
        setLoading,
        pages,
        setPages,
        totalPages,
        setTotalPages,
        posts,
        setPosts,
        fetchData,
        handlePageChange
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}