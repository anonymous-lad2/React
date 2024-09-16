import { useContext } from 'react'
import Loader from './Loader'
import { AppContext } from '../context/AppContext'

const Pagination = ()=>{

    const {posts,loading} = useContext(AppContext)
    return (
        <div className='w-9/12 max-w-[700px] mx-auto'>
            {loading ? 
                
                (<Loader className='flex justify-center items-center w-full h-screen'/>) 
                
                    : 
                
                (
                    posts.length === 0 ? (
                        <div>
                            No post found
                        </div>) 
                        
                        :

                        (posts.map((post) => (
                            <div key={post.id} className='my-11'>
                                <p className='font-bold text-xl'>{post.title}</p> 
                                <p className='text-lg'>By <span className='italic text-base'>{post.author} </span> on 
                                    <span className='font-bold border-b-2 border-b-black border-dotted text-base'> {post.category}</span></p>
                                <p>Posted On <span> {post.date}</span></p>
                                <p className='text-lg'>{post.content}</p>
                                <div className='flex gap-2'>
                                    {post.tags.map((tag, index) => (
                                        <span key={index} className='text-sm text-blue-700 font-bold underline'>{`#${tag}`}</span>
                                    ))}
                                </div>
                            </div>
                        )))
                )
            }
        </div>
    )
}

export default Pagination