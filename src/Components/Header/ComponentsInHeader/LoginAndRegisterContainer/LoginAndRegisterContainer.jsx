import React from 'react';

import { ComponentForLogin } from './style/LoginAndRegisterContainerStyle';

import groupImgs from '../../../../assets/loginContainer/containerLogin.webp';
import closeIcon from '../../../../assets/loginContainer/closeIcon.png';
import logo from '../../../../assets/logo/logo.svg';



import { GlobalContext } from '../../../../Context/GlobalContext';
import CampoRegister from './ComponentRegister/CampoRegister';

const LoginContainer = () => {

    const { 
        setOpenLoginAndRegisterContainer,
        erroInLogin, setErroInLogin,
        login, setLogin,
        register, setRegister,
        nameRegister, setNameRegister,
        emailRegister, setEmailRegister,
        enderecoRegister, setEnderecoRegister,
        complementoRegister, setComplementoRegister,
        bairroRegister, setBairroRegister,
        cepRegister, setCepRegister,
        telefoneRegister, setTelefoneRegister,
        email, setEmail,
        password, setPassword
    } = React.useContext(GlobalContext);

    

    function moveSeletor(event){
        const fatherElement = event.target.parentNode;
        
        fatherElement.children[0].style.transition = '0.5s';
        fatherElement.children[0].style.transform = 'initial';
        fatherElement.children[0].style.color = '#ffffff';
    }

    
    

    function resetSeletor(event){
        const fatherElement = event.target.parentNode;

      
        if(event.target.value.length === 0){
            fatherElement.children[0].style.transform = 'translateY(2.4vw) translateX(1.7vw) scale3d(1.1, 1.1, 1)';
            fatherElement.children[0].style.color = 'var(--darkBlue)';
        }
    }

    function closeLogin(){
        setOpenLoginAndRegisterContainer(false);
        setLogin(false);
        setRegister(false);
    }

    function loginSubmited(event){
        event.preventDefault();

        if(email.length >= 11 && password.length >= 6){

        }
        else{
            setErroInLogin(true)
        }
    }

    function atualizedStateLogin(){
        setRegister(false);
        setLogin(true);
        setNameRegister("");
        setEmailRegister("");
        setEnderecoRegister("");
        setComplementoRegister("");
        setBairroRegister("");
        setCepRegister("");
        setTelefoneRegister("");
        setEmail("");
        setPassword("");
    }

    function atualizedStateRegister(){
        setLogin(false);
        setRegister(true);
        setNameRegister("");
        setEmailRegister("");
        setEnderecoRegister("");
        setComplementoRegister("");
        setBairroRegister("");
        setCepRegister("");
        setTelefoneRegister("");
        setEmail("");
        setPassword("");
    }

    return (
        <ComponentForLogin>

            <div className="backgroundBurger">

                <img 
                    src={groupImgs} 
                    alt="burger_background" 
                />

            </div>

            <div className="loginAndRegister">

                <div 
                    className="closeLogin"
                    style={{ 
                        height: register && '5.3vw',
                        display: register && 'flex',
                        alignItems: register && 'center',
                        justifyContent: register && 'space-between'
                    }}
                >

                    {
                        register && (
                            <h4 onClick={atualizedStateLogin}>
                                Login
                            </h4>
                        )
                    }

                    <img 
                        src={closeIcon} 
                        alt="close_Icon" 
                        title="Close"
                        onClick={closeLogin}
                        style={{
                            marginTop: register && "0",
                            marginBottom: register && "0"
                        }}
                    />

                </div>

                {
                    login && (
                        <div>

                            <div className="logoAndWelcome">

                                <h3 className="welcome">Welcome!</h3>

                                <img 
                                    src={logo} 
                                    alt="Logo" 
                                />


                            </div>

                            <form 
                                className="formUserLogin"
                                onSubmit={loginSubmited}
                            >

                                <div className="email">
                                    
                                    <label htmlFor="email">Email</label>

                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        onClick={moveSeletor}
                                        onFocus={moveSeletor}
                                        onBlur={resetSeletor}
                                        maxLength="60"
                                        value={email}
                                        onChange={({target}) => setEmail(target.value)}
                                        minLength="11"
                                    />

                                </div>


                                <div className="password">
                                    
                                    <label htmlFor="password">Senha</label>

                                    <input 
                                        type="password" 
                                        id="password"
                                        name="password"
                                        onClick={moveSeletor}
                                        onFocus={moveSeletor}
                                        onBlur={resetSeletor}
                                        value={password}
                                        onChange={({target}) => setPassword(target.value)}
                                        maxLength="20"
                                        minLength="6"
                                    />

                                </div>

                                <h6 onClick={atualizedStateRegister}>
                                    Cadastre-se
                                </h6>

                                <button type="submit">
                                    Entrar
                                </button>

                                { erroInLogin && (

                                    <p>Por favor insira um E-mail e senha válidos.</p>

                                )}

                            </form>

                        </div>
                    )
                }


                {
                    register && (
                        <div>

                            <div className="PageCadastro">

                                <div className="boasVindas">

                                    <h4>Olá, vamos cadastrar para aproveitar</h4>
                                    <h4>as delícias do nosso</h4>

                                    <img 
                                        src={logo} 
                                        alt="logo_Image" 
                                        title="Food Burger Gourmet"
                                    />

                                </div>

                                <h3>Formulário de Cadastro</h3>

                                <form className="formRegister">

                                    <CampoRegister 
                                        label="Nome Completo"
                                        variable={nameRegister}
                                        setVariable={setNameRegister}
                                        minimolength="7"
                                        maximoLength="80"
                                        typeInput="text"
                                    />

                                    <CampoRegister 
                                        label="Email"
                                        variable={emailRegister}
                                        setVariable={setEmailRegister}
                                        minimolength="11"
                                        maximoLength="60"
                                        typeInput="email"
                                    />

                                    <CampoRegister
                                        label="Endereço"
                                        variable={enderecoRegister}
                                        setVariable={setEnderecoRegister}
                                        minimolength="5"
                                        maximoLength="40"
                                        typeInput="text"
                                    />

                                    <CampoRegister
                                        label="Complemento"
                                        variable={complementoRegister}
                                        setVariable={setComplementoRegister}
                                        minimolength="3"
                                        maximoLength="65"
                                        typeInput="text"
                                    />


                                    <CampoRegister
                                        label="Bairro"
                                        variable={bairroRegister}
                                        setVariable={setBairroRegister}
                                        minimolength="3"
                                        maximoLength="35"
                                        typeInput="text"
                                    />

                                    <CampoRegister
                                        label="Cep"
                                        variable={cepRegister}
                                        setVariable={setCepRegister}
                                        minimolength="8"
                                        maximoLength="9"
                                        typeInput="text"
                                    />

                                    <CampoRegister
                                        label="Telefone"
                                        variable={telefoneRegister}
                                        setVariable={setTelefoneRegister}
                                        minimolength="11"
                                        maximoLength="14"
                                        typeInput="text"
                                    />

                                    <button>
                                        Cadastrar
                                    </button>

                                </form>

                            </div>

                        </div>
                    )
                }



            </div>
            
        </ComponentForLogin>
    )
}

export default LoginContainer;
