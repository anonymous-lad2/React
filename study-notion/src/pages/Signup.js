import Template from "../components/Template"
import image from '../assets/signup.png'

const signup = ({ setIsLoggedIn })=> {
    return (
        <Template
            title='Join the million learnings to code with StudyNotion for free'
            desc1= 'Build skills for today, tomorrow, and beyond.'
            desc2= 'Education to future-proof your carrer.'
            image={image}
            formType='signup'
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default signup