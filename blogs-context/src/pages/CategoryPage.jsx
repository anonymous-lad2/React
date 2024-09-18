import { useLocation, useNavigation } from "react-router-dom"
import Header from "../components/Header"
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const CategoryPage = ()=>{

    const navigation = useNavigation();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div>
            <Header />
            <div>
                <button
                onClick={() => navigation(-1)}>
                    Back
                </button>

                <h2>
                    Blogs on <span>{category}</span>
                </h2>
            </div>
            <Pagination />
            <Footer />
        </div>
    )
}

export default CategoryPage
