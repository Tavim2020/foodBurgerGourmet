import React from 'react';
import Logo from '../../../../assets/logo/logo.svg';
import { GlobalContext } from '../../../../Context/GlobalContext';
import { CarContainerUser } from './style/CarStyle';
import menosIcone from '../../../../assets/iconesAleatorios/menosIcon.png';
import maisIcone from '../../../../assets/iconesAleatorios/maisIcon.webp';
import { Link } from 'react-router-dom';

const Car = () => {

    const { 
        bag, setBag, 
        setCar,
        setCarUserOpen,
        backgroundCarShow,
        titleCarShow,
        ingredientCarShow,
        lessCarShow,
        moreCarShow,
        valueCarShow,
        quantidadeCarShow
    } = React.useContext(GlobalContext);


    const [clickMe, setClickMe] = React.useState([]);

    const [positionInArray, setPositionInArray] = React.useState(0);
    
    const [totalPriceProduct, setTotalPriceProduct] = React.useState('');
    const [frete, setFrete] = React.useState('21.30');

    const [ retirarNoLocal, setRetirarNoLocal ] = React.useState(false);


    React.useEffect(()=>{
        if(bag.length >= 1){
            
            
            for(let i = 0; i<bag.length; i++){
                setClickMe(click => [...click, false]);           
            }

            const totalPriceProductsInArray = bag.reduce((acc, burger) => 
            acc + (Number(burger.value.replace(',', '.')) 
            * Number(burger.quantidade)), 0).toFixed(2).replace('.', ',')

            setTotalPriceProduct(totalPriceProductsInArray);

            const price = totalPriceProductsInArray.replace(',', '.');

            if(price >= 100){
                setFrete('00.00');
            }
            else{
                setFrete('21.30');
            }
            
           if(retirarNoLocal){
                setFrete('00.00');
           }
           else{
               return
           }
            
           
        }
    }, [bag, retirarNoLocal]);

    function addOne(event){
        const itemInBag = event.target.id;

        const searchItemInBag = bag.find(produto => produto.title === itemInBag);

        const position = bag.indexOf(searchItemInBag);

        

        bag[position].quantidade++

        setBag(()=>[...bag]);
    }
    
    function removeOne(event){
        const itemInBag = event.target.id;

        const searchItemInBag = bag.find(produto => produto.title === itemInBag);
        const position = bag.indexOf(searchItemInBag);
 
        if(bag[position].quantidade >= 1){

            bag[position].quantidade--
            setBag(()=> [...bag]);
        }

        if(bag.length === 0 || bag === []){
            setCar(false);
            setCarUserOpen(false);
        }
        else if(bag[position].quantidade === 0 && bag.length >= 1){
            console.log(bag)
            bag.splice(position, 1);

            setBag([...bag]);
            
            // const trueClick = clickMe.indexOf(true);
            
            if(bag.length >= 1 && backgroundCarShow.current && titleCarShow.current &&
                ingredientCarShow.current && lessCarShow.current &&
                moreCarShow.current && valueCarShow.current &&
                quantidadeCarShow.current){
                    setPositionInArray(0);
                    clickMe.forEach(posicao => posicao = false)
                    clickMe[0] = true;
        
                    setClickMe([...clickMe]);
                    backgroundCarShow.current.style.backgroundImage = `url(${bag[0].img})`;
                    titleCarShow.current.textContent = bag[0].title;
                    ingredientCarShow.current.textContent = bag[0].ingredient;
                    lessCarShow.current.id = `${bag[0].title}`;
                    moreCarShow.current.id = `${bag[0].title}`;
                    valueCarShow.current.textContent = `R$: ${bag[0].value}`;
                    quantidadeCarShow.current.textContent = `${bag[0].quantidade}` 
                }
        }

    };


    function changeContainerShow(event){
        const id = event.target.id;

        setPositionInArray(id);

        setClickMe(clickMe.forEach(position => position = false));

        clickMe[id] = true;

        setClickMe([...clickMe]);


        if(backgroundCarShow.current && titleCarShow.current &&
            ingredientCarShow.current && lessCarShow.current &&
            moreCarShow.current && valueCarShow.current &&
            quantidadeCarShow.current){
                backgroundCarShow.current.style.backgroundImage = `url(${bag[id].img})`;
                titleCarShow.current.textContent = bag[id].title;
                ingredientCarShow.current.textContent = bag[id].ingredient;
                lessCarShow.current.id = `${bag[id].title}`;
                moreCarShow.current.id = `${bag[id].title}`;
                valueCarShow.current.textContent = `R$: ${bag[id].value}`;
                quantidadeCarShow.current.textContent = `${bag[id].quantidade}`
        }

    }

    return (
        <CarContainerUser>
            <div className="meusPedidos">

                <div className="centralizedContainerForCar">


                    <h5>Meus Pedidos</h5>

                    <img 
                        src={Logo} 
                        alt="Logo_Image" 
                        title="Food Burger Gourmet" 
                    />
                    
                </div>

            </div>

        {
            clickMe[positionInArray] && (

                <div 
                    className="showBurger"
                    style={{ 
                        backgroundImage: bag.length >= 1 && `url(${bag[positionInArray].img})`,
                        backgroundPosition: bag.length >= 1 && bag[positionInArray].objectPosition 
                        && `${bag[positionInArray].objectPosition}`
                    }}
                    ref={backgroundCarShow}
                >

                    <div className="informationMyBurger">

                        <h6 ref={titleCarShow}>{bag.length >= 1 && bag[positionInArray].title}</h6>

                        <div className="ContainerIngredientes">

                            <p className="subTitle">Ingredientes</p>

                            <p 
                                className="ingredientes"
                                ref={ingredientCarShow}
                            >{bag.length >= 1 && bag[positionInArray].ingredient}</p>

                        </div>


                        <div className="ContainerQuantidade">

                            <p className="subTitle">Quantidade: </p>

                            <div className="quantidade">

                                <img 
                                    src={menosIcone} 
                                    alt="Icon_Less" 
                                    onClick={removeOne}
                                    ref={lessCarShow}
                                    id={bag.length >= 1 && bag[positionInArray].title}
                                />

                                <p ref={quantidadeCarShow}>{bag.length >= 1 && bag[positionInArray].quantidade}</p>

                                <img 
                                    src={maisIcone} 
                                    alt="Icon_More" 
                                    onClick={addOne}
                                    ref={moreCarShow}
                                    id={bag.length >= 1 && bag[positionInArray].title}
                                />

                            </div>

                        </div>


                        <div className="ContainerValue">

                            <p className="subTitle">Preço por Unidade: </p>


                            <p 
                                className="value"
                                ref={valueCarShow}
                            >
                                R$: {bag.length >= 1 && bag[positionInArray].value}
                            </p>

                        </div>



                    </div>


                </div>
            )
        }


            <div className="ContainerForBurgerSelected">

                <div className="MyFoodBurgerGourmet">

                    <h2>Meu</h2>
                    
                    <h2>Food</h2>

                    <h2>Burger</h2>

                    <h2>Gourmet</h2>
                </div>

                <div className="WrapperBurger">

                    {
                        bag.length >=1 && bag.map((burger, index) => 

                            <div 
                                className="ContainerBurger"  
                                id={index}
                                key={Math.random() * index}
                                onClick={changeContainerShow}
                            >

                                <h3 
                                    id={index}
                                    onClick={changeContainerShow}
                                >
                                    {burger.title}
                                </h3>

                                
                                <p 
                                    id={index}
                                    onClick={changeContainerShow}
                                >
                                    Click Me
                                </p>
                                   


                            </div>

                        )
                    }

                </div>

                <div className="ContainerFooterCar">

                    <div className="detalhes">

                        <h2>Detalhes</h2>

                        <div className="allDetalhes">

                            <h4>Meu(s) burger(s)</h4>

                            {
                                bag.length >=1 && bag.map((burger) => 
                                
                                <div className="showBurgerTotal" key={Math.random() + Math.random()}>

                                    <p>{`${burger.title}X${burger.quantidade} = R$ ` + 
                                    (Number(burger.value.replace(',', '.')) * Number(burger.quantidade)).toFixed(2).replace('.', ',')}</p>
                                    

                                </div>

                                )
                            }


                        </div>

                    </div>

                    <span className="bar"></span>


                    <div className="total">


                        <h2>Total</h2>

                        <div className="showTotalPrice">

                            <div className="PriceTotalItems">

                                <h4>Burger Preço:</h4>

                                <p>R$: {totalPriceProduct}</p>

                            </div>


                            <div className="PriceFrete">

                                <h4>Frete:</h4>

                                <p>R$: {bag.length >= 1 && frete.replace('.', ',')}</p>

                            </div>

                            <div className="retirarLocal">

                                <h4>Retirar no Local:</h4>

                                <input 
                                    type="checkbox" 
                                    name="retirarInLocal" 
                                    id="retirarInLocal" 
                                    value={retirarNoLocal}
                                    onClick={() => setRetirarNoLocal(!retirarNoLocal)}
                                />

                            </div>

                            <span className="barHorizontal"></span>

                            <div className="totalPrice">

                                <h4>Total:</h4>

                                <p>{(Number(totalPriceProduct.replace(',', '.')) + 
                                    Number(frete)).toFixed(2).replace('.', ',')}</p>

                            </div>

                            <div className="ContainerConfirm">

                                <Link to="/checkout">

                                    <button>Confirmar Pedido</button>
                                    
                                </Link>


                            </div>

                        </div>

                        <h5>Atenção: Frete grátis para compras acima de R$100,00</h5>

                    </div>




                </div>

            </div>
            
        </CarContainerUser>
    )
}

export default Car;
