import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) =>{

    const [header, setHeader] = React.useState(false);
    const [footer, setFooter] = React.useState(false);
    const textPagePrincipalChange = React.useRef(null);
    const [home, setHome] = React.useState(false);
    const localizationContainer = React.useRef(null);

    const [stateOne, setStateOne] = React.useState(true);
    const [stateTwo, setStateTwo] = React.useState(false);
    const [stateThree, setStateThree] = React.useState(false);

    const [bag, setBag] = React.useState([]);
    const [ car, setCar] = React.useState(false);
    const [ carUserOpen, setCarUserOpen ] = React.useState(false);

    const backgroundCarShow = React.useRef(null);
    const titleCarShow = React.useRef(null);
    const ingredientCarShow = React.useRef(null);
    const lessCarShow = React.useRef(null);
    const moreCarShow = React.useRef(null);
    const valueCarShow = React.useRef(null);
    const quantidadeCarShow = React.useRef(null);


    const [openLoginAndRegisterContainer, setOpenLoginAndRegisterContainer] = React.useState(false);
    const [login, setLogin] = React.useState(false);
    const [register, setRegister] = React.useState(false);
    const [ erroInLogin, setErroInLogin ] = React.useState(false);


    // formulario login e cadastro
    const [nameRegister, setNameRegister] = React.useState('');
    const [emailRegister, setEmailRegister] = React.useState('');
    const [enderecoRegister, setEnderecoRegister] = React.useState('');
    const [complementoRegister, setComplementoRegister] = React.useState('');
    const [bairroRegister, setBairroRegister] = React.useState('');
    const [cepRegister, setCepRegister] = React.useState('');
    const [telefoneRegister, setTelefoneRegister] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <GlobalContext.Provider value={{
            header, setHeader,
            textPagePrincipalChange,
            home, setHome,
            footer, setFooter,
            localizationContainer,
            stateOne, setStateOne,
            stateTwo, setStateTwo,
            stateThree, setStateThree,
            bag, setBag,
            car, setCar,
            carUserOpen, setCarUserOpen,
            backgroundCarShow,
            titleCarShow,
            ingredientCarShow,
            lessCarShow,
            moreCarShow,
            valueCarShow,
            quantidadeCarShow,
            openLoginAndRegisterContainer, setOpenLoginAndRegisterContainer,
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
            
        }}>
            {children}
        </GlobalContext.Provider>
    )
}