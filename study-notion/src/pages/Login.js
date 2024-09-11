import image from '../assets/login.png'
import Template from '../components/Template'

const Login = ()=> {

    return (

        <Template
                title= 'Welcome Back'
                desc1= 'Build skills for today, tomorrow, and beyond.'
                desc2= 'Education to future-proof your carrer.'
                image= {image}
                formType='login'
        />
    )
}

export default Login