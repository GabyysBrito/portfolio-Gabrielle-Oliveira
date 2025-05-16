import projetoDemon from '../../assets/projetos/projetoDemonSlayer.png'
import projetoPadrinhos from '../../assets/projetos/projetoPadrinhos.png'
import projetoXmen from '../../assets/projetos/projetoXmen.png'
import projetoViagem from '../../assets/projetos/projetoViagem.png'
import projetoFormulario from '../../assets/projetos/projetoFormulario.png'
import projetoOutubro from '../../assets/projetos/projetoOutubro.png'
import projetoLivros from '../../assets/projetos/projetoLivros.png'
import projetoFinn from '../../assets/projetos/projetoFinn.png'
import projetoNatalFlix from '../../assets/projetos/projetoNatalFlix.png'
import projetoAudioBook from '../../assets/projetos/projetoAudioBook.png'
import projetoLampada from '../../assets/projetos/projetoLampada.png'
import projeto2025 from '../../assets/projetos/projeto2025.png'
import projetoLojaCelular from '../../assets/projetos/projetoLojaCelular.png'
import projetoNatal from '../../assets/projetos/projetoNatal.png'

import iconeDeploy from '../../assets/projetos/iconeDeploy.png'
import iconeGithub from '../../assets/projetos/iconeGithub.png'
import s from './projetos.module.scss'

export default function Projetos(){

    const projetos = [
        {
            image: projetoLivros,
            linkGithub:"https://github.com/GabyysBrito/DesafioFinalLivrosVaiNaWeb",
            linkDeploy:"https://desafio-final-livros-vai-na-web.vercel.app/",
            altImage:"Imagem de um projeto de página web mostrando o objetivo destacar a importância da leitura. A página apresenta informações sobre o impacto dos livros na vida das pessoas, além de oferecer opções para doação e exibir uma lista de livros já doados."
        },
        {
            image: projetoFinn,
            linkGithub:"https://github.com/GabyysBrito/LoginFinn",
            linkDeploy:"https://login-finn.vercel.app/",
            altImage:"Imagem de um projeto de um cadastro do personagem Finn do desenho Uma Hora de Aventura."
        },
        {
            image: projetoNatalFlix,
            linkGithub:"https://github.com/GabyysBrito/NatalFlix",
            linkDeploy:"https://natal-flix-five.vercel.app/",
            altImage:"Imagem de um projeto de página web mostrando um estilo de tela da Netflix mostrando filmes na época de natal."
        },
        {
            image: projetoAudioBook,
            linkGithub:"https://github.com/GabyysBrito/AudioBook",
            linkDeploy:"https://gabyysbrito.github.io/AudioBook/",
            altImage:"Imagem de um projeto de página web de audiobook do Dom Casmurro."
        },
        {
            image: projetoLampada,
            linkGithub:"https://github.com/GabyysBrito/GenioDaLampada",
            linkDeploy:"https://genio-da-lampada-delta.vercel.app/",
            altImage:"Imagem de um projeto desenvolvido em página web de uma lâmpada quando clicar mostrará o gênio da lâmpada."
        },
        {
            image: projeto2025,
            linkGithub:"https://github.com/GabyysBrito/anoNovo2025",
            linkDeploy:"https://ano-novo2025-drab.vercel.app/",
            altImage:"Imagem de um projeto desenvolvido em pagina web com um site desejando feliz ano novo de 2025."
        },
        {
            image: projetoLojaCelular,
            linkGithub:"https://github.com/GabyysBrito/LojaDeCelular",
            linkDeploy:"https://loja-de-celular-dusky.vercel.app/",
            altImage:"Imagem de um projeto desenvolvido em página web de uma loja de celulares mostrando 3 card de celulares treinando o map()."
        },
        {
            image: projetoNatal,
            linkGithub:"https://github.com/GabyysBrito/DesafioDeNatal",
            linkDeploy:"https://desafio-de-natal.vercel.app/",
            altImage:"Imagem de um projeto desenvolvido em página web sobre a história do natal."
        },
        {
            image: projetoOutubro,
            linkGithub:"https://github.com/GabyysBrito/Outubro-Rosa",
            linkDeploy:"https://outubro-rosa-beta-three.vercel.app/",
            altImage:"Imagem de um projeto desenvolvido como concientização do Outubro rosa."
        },
        {
            image: projetoFormulario,
            linkGithub:"https://github.com/GabyysBrito/nlw-unite",
            linkDeploy:"https://gabyysbrito.github.io/nlw-unite/",
            altImage:"Imagem de um projeto desenvolvido estilo um formulário com nome e email da pessoa."
        },
        {
            image: projetoPadrinhos,
            linkGithub:"https://github.com/GabyysBrito/PadrinhosMagicos-T1",
            linkDeploy:"https://padrinhos-magicos-t1-liart.vercel.app/",
            altImage:"Imagem de um projeto desenvolvido com estilo de netflix com alguns episódios do desenho Padrinhos Mágicos."
        },
        {
            image: projetoDemon,
            linkGithub:"https://github.com/GabyysBrito/DemonSlayer",
            linkDeploy:"https://gabyysbrito.github.io/DemonSlayer/",
            altImage:"Imagem de um projeto desenvolvido com personagens do anime chamado Demon Slayer."
        },
        {
            image: projetoViagem,
            linkGithub:"https://github.com/GabyysBrito/viagemdossonhos",
            linkDeploy:"https://gabyysbrito.github.io/viagemdossonhos/",
            altImage:"Imagem de um projeto desenvolvido de um site viagem para escolher lugares e escolher preços acessíveis para poder conhecer os lugares."
        },
        {
            image: projetoXmen,
            linkGithub:"https://github.com/GabyysBrito/x-men",
            linkDeploy:"https://gabyysbrito.github.io/x-men/",
            altImage:"Imagem de um projeto desenvolvido com personagens de desenhos em quadrinhos do X-men."
        }
    ]

    return(
        <section className={s.main}>
            <section className={s.fundo}>

                <section className={s.projetos}>

                    <section className={s.tituloProjetos}>
                        <p>Projetos</p>
                        <div className={s.borda}></div>
                    </section>

                    <section className={s.descricaoProjetos}>
                        { projetos.map( (item) => (
                            
                            <section className={s.bordaProjetos}>

                                <img className={s.imgProjetos} src={item.image} alt={item.altImage} />
                                
                                <section className={s.secaoLinks}>
                                    <a href={item.linkGithub} target='_blank'><img src={iconeGithub} alt="Icone de uma plataforma chamada gitHub com o desenho parecido com um gato" /></a>
                                    <a href={item.linkDeploy} target='_blank'><img className={s.imgIcone} src={iconeDeploy} alt="Icone de uma bola parecida como um globo com uma lupa um pouco embaixo do globo" /></a>
                                </section>
                            
                            </section>
                        ))}
                        
                    </section>
                </section>
            </section>
        </section>
    )
}