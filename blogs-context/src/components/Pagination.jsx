import { useContext } from 'react'
import Loader from './Loader'
import { AppContext } from '../context/AppContext'
import BlogDetails from './BlogDetails'

const Pagination = () => {

    const { posts, loading } = useContext(AppContext)
    return (
        <div className="flex flex-col gap-y-10 my-4 mt-[100px] mb-[70px]">
            {loading ? (
                <div className="min-h-[80vh] w-full flex justify-center items-center">
                    <p className="text-center font-bold text-3xl">Loading</p>
                </div>
            ) : posts.length === 0 ? (
                <div className="min-h-[80vh] w-full flex justify-center items-center">
                    <p className="text-center font-bold text-3xl">No Blogs Found !</p>
                </div>
            ) : (
                posts.map((post) => (
                    <BlogDetails key={post.id} post={post}/>
                ))
            )}
        </div>
    )
}

export default Pagination