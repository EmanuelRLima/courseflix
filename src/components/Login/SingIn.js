import React from 'react'
import { /* useSelector, */ useDispatch } from 'react-redux'
/* import { decrement, increment } from '../../feature/counter/counter-slice' */
import { NewName } from '../../feature/login/login-slice' 

export function SingIn() {
  /* const count = useSelector((state) => state.counter.value);

  const name = useSelector((state) => state.Login.name); */
  

  const dispatch = useDispatch()

  const handleClick = () => {
    
    let email = document.getElementById("email").value; // Valor que você deseja passar para o estado
    let password = document.getElementById("password").value;

    let login = {email, password};

    dispatch(NewName(login));
  };
 
const Logo = require('../../assets/img/Logo.png')
const Login_screen = require('../../assets/img/Login_screen.png')
  return (

    <>
      {/*
       <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      <div>
        <button
          aria-label="Increment value"
          onClick={handleClick}
        >
          New name
        </button>
        <span>{name}</span>
       
      </div>


        ```
      */}
      <div className='container_login'>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 float-left container_box_login"> 
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={Logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Entre em sua conta!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6" action="#" method="POST" >
            <div>
              <label htmlFor="email" className="flex text-sm font-medium leading-6 text-gray-900 justify-start">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Senha
                </label>
                <div className="text-sm">
                  <a href="linkedin.com" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleClick}
              >
                Entrar
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Não é assinante?{' '}
            <a href="linkedin.com" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Faça sua conta aqui!
            </a>
          </p>
        </div>
      </div>

      <div className="flex min-h-full flex-col justify-center float-right container_box_login_img"> 
        <div>
          <img
            className='login_image'
            src={Login_screen}
            alt="Your Company"
          />
        </div>  
      </div>
      </div>
    </>
    
  )
}

export default SingIn;