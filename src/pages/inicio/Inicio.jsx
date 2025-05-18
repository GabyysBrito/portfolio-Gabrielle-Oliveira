import s from './inicio.module.scss'
import fotoPerfil from '../../assets/fotoPerfil.png'
import iconeGithub from '../../assets/iconeGithub.png'
import iconeLinkedln from '../../assets/iconeLinkedln.png'

export default function Inicio() {
    return(
        <main className={s.main}>
            <section className={s.perfil}>
                <img src={fotoPerfil} alt="Foto de uma garota ruiva responsável pelo portfólio" />

                <h1>Desenvolvedora Web</h1>
            </section>
            
            <section className={s.sobre}>
                <h1>Olá!</h1>
                <h2>Meu nome é <span>Gabrielle Oliveira de Brito</span></h2>
                <p>Sou estudante de Análise e Desenvolvimento de Sistemas, em busca de me tornar Desenvolvedora Web. Estou no ínicio de carreira, mas com muita motivação para crescer e contribuir com projetos que façam a diferença. </p>

                <section className={s.rede}>
                    <a href="https://github.com/GabyysBrito" target='_blank'><img src={iconeGithub} alt="Imagem da logo de um gato da rede social github" /></a>
                    <a href="https://www.linkedin.com/in/gabrielle-oliveira-4b3504249" target='_blank'><img src={iconeLinkedln} alt="Imagem da logo do linkedln" /></a>
                </section>
            </section>
        </main>
    )
}