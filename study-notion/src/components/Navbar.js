import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const isLoggedIn = props.isLoggedIn
    const setIsLoggedIn = props.setIsLoggedIn
    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">

            <Link to="/">
                <img src={logo} height={32} width={160} loading="lazy" />
            </Link>

            <nav>
                <ul className="flex gap-x-6 text-richblack-100">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-x-4 text-richblack-100">

                {!isLoggedIn &&
                    <Link to="/login">
                        <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Login
                        </button>
                    </Link>
                }

                {!isLoggedIn &&
                    <Link to="/signup">
                        <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Sign up
                        </button>
                    </Link>
                }

                {
                    isLoggedIn &&
                    <Link to='/'>
                        <button
                            onClick={() => {
                                setIsLoggedIn(false);
                                toast.success("Logout Sucessfully");
                            }}
                            className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Log out
                        </button>
                    </Link>
                }

                {
                    isLoggedIn &&
                    <Link to='/dashboard'>
                        <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            dashboard
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar