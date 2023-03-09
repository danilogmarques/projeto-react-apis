import { Head, PokedexButton, Image, LeftButton } from "./HeaderStyle";
import { useNavigate } from "react-router-dom"
import Logo from "../Images/Logo.png";
import { useState } from "react";
import { goToPokedexPage, goToListPage } from "../../router/Codinator";




export function Header() {

    const [header, setHeader] = useState(1)


    const navigate = useNavigate();



    if (header === 1) {
        return (
            <Head>
                <Image src={Logo} />
                <PokedexButton onClick={() => { goToPokedexPage(navigate, setHeader) }}>Pokedex</PokedexButton>
            </Head>
        );
    };
if (header === 2) {
        return (
            <Head>
                <Image src={Logo} />
                <LeftButton onClick={() => { goToListPage(navigate, setHeader) }}>Todos Pokémons </LeftButton>
            </Head>
        );
    }

    if(header === 3) { 
        return(
            <Head>
                <Image src={Logo} />
                <LeftButton onClick={()=> { goToListPage(navigate, setHeader)}}>Todos os Pokémons</LeftButton>
                <button>EXCLUIR DA POKEDEX</button>
            </Head>
        )
    }
}


    
















