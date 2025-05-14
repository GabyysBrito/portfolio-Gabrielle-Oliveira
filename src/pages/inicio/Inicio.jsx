import s from './inicio.module.scss'
import fotoPerfil from '../../assets/fotoPerfil.png'

export default function Inicio() {
    return(
        <main className={s.main}>
            <section className={s.perfil}>
                <img src={fotoPerfil} alt="Foto de uma garota ruiva responsável pelo portfólio" />

                <h1>Desenvolvedora Web</h1>
            </section>
            
            <section className={s.sobre}>
                <h1>Olá!</h1>
                <h2>Meu nome é <span>Gabrielle Oliveira</span></h2>
                <p>Sou  estudante de Análise e Desenvolvimento de Sistemas, em busca de me tornar Desenvolvedora Web. Estou no ínicio de carreira, mas com muita motivação para crescer e contribuir com projetos que façam a diferença. </p>
            </section>
        </main>
    )
}