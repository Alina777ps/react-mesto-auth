import React from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import Header from "./Header";
import * as auth from '../utils/auth';


function Register({ setIsRegisterFalse, setIsRegisterTrue }) {

  const navigate = useNavigate();

  const[errorMessege, setErrorMessege] = React.useState("")

    const [formValue, setFormValue] = React.useState({
      email: '',
      password: '',
    })
  
    const handleChange = (e) => {
      const {name, value} = e.target;
  
      setFormValue({
        ...formValue,
        [name]: value
      });
    }
     
    const handleSubmit = (e) => {
      e.preventDefault();
        auth.register(formValue.password, formValue.email)
          .then((data) => {
              setIsRegisterTrue(true)
              navigate('/sign-in', {replace: true})
          })
          .catch((err) => {
            setIsRegisterFalse(true)
            setErrorMessege(err)
          })
    }


    return (
        <div>
            <Header titleButtonHeader='Войти' path='/sign-in' userEmail="" />
        <div className="formAuth" >
          <h2 className="formAuth__title">Регистрация</h2>
          <form className="formAuth__form"  name='register' noValidate onSubmit={handleSubmit} >
            <fieldset className="formAuth__fieldset">
            <label className="formAuth__label">
            <input 
              className="formAuth__input formAuth__input_type_email" 
              type="email" 
              placeholder="Email" 
              id="email" name="email" 
              minLength={2} maxLength={40} required 
              value={formValue.email} onChange={handleChange} />
            <span className="email-error formAuth__input-error"></span>
          </label>
          <label className="formAuth__label">
            <input 
              className="formAuth__input formAuth__input_type_password" 
              type="text" 
              placeholder="Пароль" 
              id="password" 
              name="password" 
              minLength={2} maxLength={200} required 
              value={formValue.password} onChange={handleChange} />
            <span className="password-error formAuth__input-error"></span>
          </label>
          <p className="formAuth__erorr">{errorMessege}</p>
            </fieldset>
            <button className="formAuth__button" type="submit" onSubmit={handleSubmit}>Зарегистрироваться</button>
          </form>
          <p className="formAuth__question">Уже зарегистрированы?&nbsp;<Link to='/login' className="formAuth__button-login">
            Войти
          </Link></p>
        </div>
      </div>
    )
}

export default Register;