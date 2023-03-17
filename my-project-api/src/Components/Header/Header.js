import { Head, PokedexButton, Image, LeftButton } from "./HeaderStyle";
import { useNavigate, useLocation } from "react-router-dom"
import Logo from "../Images/Logo.png";
import { goToPokedexPage, goToListPage } from "../../router/Codinator";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";




export function Header(name) {

    const context = useContext(GlobalContext);

    const { removeFromPokedex } = context;


    


    const navigate = useNavigate();

    const location = useLocation();

    // const renderHeader = {
        if(location.pathname === "/"){
            return(
                <Head>
                <Image src={Logo} />
                <PokedexButton onClick={() => { goToPokedexPage(navigate) }}>Pokedex</PokedexButton>
                </Head>
             )
         }
         if(location.pathname === "/detalhes/:id"){
            return(
            <Head>
                <Image src={Logo} />
                <button>EXCLUIR DA POKEDEX</button>
                {/* <LeftButton onClick={()=> { goToListPage(navigate)}}>Todos os Pokémons</LeftButton> */}
            </Head>
            )
         }else{
            return(
            <Head>
                <Image src={Logo} />
                <LeftButton onClick={() => { goToListPage(navigate) }}>Todos Pokémons </LeftButton>
                {/* <button onClick={()=>{removeFromPokedex(name)}}>EXCLUIR DA POKEDEX</button> */}
            </Head>
            )
         }
        };
                


    