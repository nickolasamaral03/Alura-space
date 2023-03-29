import banner from '../Pagina/Paginainicial/banner.png'
import styles from "../Pagina/Paginainicial.module.scss"

import Cabecalho from "../componentes/Cabecalho"
import Menu from "../../src/componentes/menu"
import Galeria from '../componentes/Galeria'
import Populares from '../componentes/populares'

// import Rodape from '../Rodape'

export default function PaginaInicial(){
    return(
    <>
        <Cabecalho />
        <main>
        <section className={styles.principal}>
        <Menu/>
        <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="Terra do espaço" />
        </div>
        </section>
        <div className={styles.galeria}>
            <Galeria/>
            <Populares/>
        </div>
        </main>
        
        </>
        
    );
    }
        
        
    
        
        


           

        


    