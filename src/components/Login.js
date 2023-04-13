import React from "react";
import { useNavigate } from 'react-router-dom'; 
import * as auth from '../utils/auth';

import Header from "./Header";

function Login({ handleLogin }) {

  const[errorMessege, setErrorMessege] = React.useState("")

  const navigate = useNavigate();

  const [formValue, setFormValue] = React.useState({
    email: '',
    password: ''
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
    if (!formValue.email || !formValue.password) {
      setErrorMessege(`Не заполнены поля email или пароль`)
      return;
    }
    auth.authorize(formValue.password, formValue.email)
      .then((data) => {
        console.log(data)
        if (data.token) {
            localStorage.setItem('jwt', data.token);
            handleLogin(formValue.email);
            setFormValue({email: '', password: ''});
            navigate('/main', {replace: true});
        }      
        })
      .catch(err => setErrorMessege(err));
      }

    return (
        <div>
            <Header titleButtonHeader='Регистрация' path='/sign-up' userEmail="" />
        <div className="formAuth" >
          <h2 className="formAuth__title">Вход</h2>
          <form className="formAuth__form"  name='register' noValidate onSubmit={handleSubmit}>
            <fieldset className="formAuth__fieldset">
            <label className="formAuth__label">
            <input 
              className="formAuth__input formAuth__input_type_email" 
              type="email" placeholder="Email" 
              id="email" 
              name="email" 
              minLength={2} maxLength={40} required 
              value={formValue.email} 
              onChange={handleChange} />
            <span className="email-error formAuth__input-error"></span>
          </label>
          <label className="formAuth__label">
            <input 
              className="formAuth__input formAuth__input_type_password" 
              type="text" placeholder="Пароль" 
              id="password" 
              name="password" 
              minLength={2} maxLength={200} required 
              value={formValue.password} 
              onChange={handleChange} />
            <span className="password-error formAuth__input-error"></span>
          </label>
          <p className="formAuth__erorr">{errorMessege}</p>
            </fieldset>
            <button className="formAuth__button" type="submit">Войти</button>
          </form>
        </div>
      </div>
    )

}

export default Login;