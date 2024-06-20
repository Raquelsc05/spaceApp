import styled from "styled-components"
import ItemNavegacao from "../Cabecalho/ItemNavegacao"

const ListaEstilizada = styled.ul`
     list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const BarraLateral = () => {

  return(
    <aside>
     <nav>
     <ListaEstilizada>
     <ItemNavegacao
                        iconeAtivo="./Icones/Home - ativo.png" 
                        iconeInativo="./Icones/Home - inativo.png"
                        ativo >
                        Início
   </ItemNavegacao>

   <ItemNavegacao
    iconeAtivo="./Icones/Mais vistas - ativo.png" 
    iconeInativo="./Icones/Group 4.png"
>
    Mais vistas
      </ItemNavegacao>
     

    
   <ItemNavegacao
    iconeAtivo="./Icones/Mais curtidas - ativo.png" 
    iconeInativo="./Icones/Group 5.png"
>
    Mais curtidas
      </ItemNavegacao>

      <ItemNavegacao
    iconeAtivo="./Icones/Novas - ativo.png" 
    iconeInativo="./Icones/Group 6.png"
>     Novas
      </ItemNavegacao>

      
      <ItemNavegacao
    iconeAtivo="./Icones/Surpreenda-me - ativo.png" 
    iconeInativo="./Icones/Group 7.png"
>     Surpreenda-me
      </ItemNavegacao>
      </ListaEstilizada>
     </nav>

    </aside>
  )
}

export default BarraLateral