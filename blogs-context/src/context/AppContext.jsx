import { createContext, useEffect, useState } from "react";
import baseUrl from '../baseUrl'


export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [pages, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [posts, setPosts] = useState([]);

    async function fetchData(page = 1) {
        setLoading(true);
        try {
            let url = `${baseUrl}?page=${page}`
            const data = await fetch(url)
            const response = await data.json()
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

    function handlePageChange(page){
        setPages(page);
        fetchData(page)
    }


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}