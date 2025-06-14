import s from './formacoes.module.scss'
import iconeChapeu from '../../assets/iconeChapeu.png'
import iconeCertificacao from '../../assets/iconeCertificacao.png'
import setaEsquerda from '../../assets/setaEsquerda.png'

export default function Formacoes(){
    const educacao = [
        {
        ano: "2024-2026",
        curso:"Tecnólogo em Análise e Desenvolvimento de Sistemas",
        instituicao:"Centro Universitário Internacional - UNINTER"
        },

        {
            ano:"2024-2025",
            curso:"Curso de Desenvolvimento Web Full Stack",
            instituicao:"Vai na Web"
        },
        
        {
            ano:"2024",
            curso:"Curso de Qualificação Profissional ",
            instituicao:"Instituto PROA"
        },

        {
            ano:"2017-2019",
            curso:"Ensino médio",
            instituicao:"Erem Santa Paula Frassinetti"
        }
    ]

    const certificacao = [
        {
            ano: "2024-2025",
            curso:"Certificacão em Desenvolvimento Web Fullstack",
            instituicao:"Vai na Web",
            image: iconeCertificacao,
            link:"https://drive.google.com/file/d/1pl1kENmFvJ1-378YwgD4W9rTPDLw2eYO/view?usp=drive_link",
            seta: setaEsquerda
        },

        {
            ano: "2024",
            curso:"Certificacão em Formação Profissionalizante",
            instituicao:"Instituto PROA",
            image: iconeCertificacao,
            link:"https://drive.google.com/file/d/1fD6vSE-m9-S1mSwyGg0kSVcWOiC6JBFZ/view?usp=drive_link",
            seta: setaEsquerda
        },

        {
            ano:"2024",
            curso:"Certificacão em Fundamentos de Machine Learning",
            instituicao:"Instituto PROA",
            image: iconeCertificacao,
            link:"https://drive.google.com/file/d/1BRF7_sCbGqDGNyY6dtin8z4sJTJRdB5e/view?usp=drive_link",
            seta: setaEsquerda
        }
    ]
    
    return(
        <section className= {s.main}>
            <section className={s.fundo}>

                <section className={s.formacoes}>
                    
                    <section className= {s.tituloFormacoes}>
                        <p>Formações</p>
                        <div className={s.borda}></div>
                    </section>
                        
                    <section className={s.descricaoFormacoes}>

                        <section className= {s.titulos}>
                            <section className={s.especificacao}>
                            <img src={iconeChapeu} alt="Imagem de um chapéu de formatura" />
                            <p>Experiência Acadêmica</p>
                            </section>
                        </section>
                    
                        <section className={s.secaoFormacoes}>
                            { educacao.map((item) => (
                            
                                <section className={s.borda}>
                                    <section className={s.texto}>
                                        <p>{item.ano}</p>
                                        <p>{item.curso}</p>
                                        <p>{item.instituicao}</p>
                                    </section>
                                </section>
                            ))}
                        </section>
                    </section>

                    
                    <section className={s.descricaoFormacoes2}>

                        <section className= {s.titulos}>
                            <section className={s.especificacao}>
                            <img src={iconeCertificacao} alt="Imagem de um papel como certificado com um laço" />
                            <p>Certificações</p>
                            </section>
                        </section>

                        <section className={s.secaoFormacoes2}>
                            { certificacao.map((item) => (
                                <section className={s.borda}>
                                    <section className={s.texto}>
                                        <p>{item.ano}</p>
                                        <p>{item.curso}</p>
                                        <p>{item.instituicao}</p>
                                        <section className={s.icone}>
                                            <a href={item.link} target='_blank'><img src={item.image} alt="Imagem de um papel como certificado com um laço" /></a>
                                            <img className={s.seta} src={item.seta} alt="Icone se uma seta virada para a esquerda" />
                                        </section>
                                    </section>
                                </section>
                            ))}
                        </section>
                    </section>
                
                </section>

            </section>
        </section>
    )
}