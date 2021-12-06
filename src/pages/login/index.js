/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { LOGIN_USUARIO } from '../../mutation/usuario';

export const Login = () => {
    const history = useHistory();
    const [loginUser, { error }] = useMutation(LOGIN_USUARIO)


    const onLogin = async () => {
        const email = document.querySelector("#txt_email").value
        const password = document.querySelector("#txt_password").value

        if(email === '' || password === '') {
            
            Swal.fire({
                title: 'Preencha os campos',
                icon: 'error',
                confirmButtonText: 'Tente novamente'
              })
            return 
        }

        try {
            console.log({
                variables: {
                    cpf: email,
                    senha: password
                }
            })
            

            const returnLogin = await loginUser({
                variables: {
                    cpf: email,
                    senha: password
                }
            })

            console.log("this is data", { returnLogin })
            if(returnLogin) {
                localStorage.setItem("token", returnLogin.data.login.token)
                history.push('/sistema');
            return
            }
            
        } catch (errors) {
            return Swal.fire({
                title: 'Ops!',
                text: error ? error.message : errors.message || errors[0].message,
                icon: 'error'
              })
        }
    }

    useEffect(() => {
        localStorage.clear()
    }, [])


    return (
        <div className='paginaLogin'>
        <div className='areaLogin'>
            <figure className='logotipoLogin'><img src='../img/logo1.png' alt='Logotipo Kokimbos'></img></figure>
            <input type="email" id="txt_email" placeholder='Digite seu Login' /> <br />
            <input type="password" id="txt_password" placeholder='Digite sua Senha' /><br />
            <input type="submit" value="Confirmar" className='botaoCadastrar' onClick={() => onLogin()} />
        </div>
        </div>
    );
}