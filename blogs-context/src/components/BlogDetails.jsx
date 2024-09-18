import { NavLink } from "react-router-dom"

const BlogDetails = ({post})=>{
    return (
        <div className="w-10/12 max-w-[700px] mx-auto">
            <NavLink to={`/blog/${post.id}`} >
                <span className="font-bold text-lg hover:text-blue-500">{post.title}</span>
            </NavLink>

            <p>
                By
                <span className="italic"> {post.author} </span>
                on{" "}
                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span className="border-b-2 border-black border-dotted">{post.category}</span>
                </NavLink>
            </p>
            <p>Posted on {post.date}</p>
            <p className="text-lg mt-2">{post.content}</p>
            <div className="flex gap-2">
                {post.tags.map((tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                        <span className="text-blue-700 font-bold underline hover:text-red-600">{`#${tag}`}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default BlogDetails