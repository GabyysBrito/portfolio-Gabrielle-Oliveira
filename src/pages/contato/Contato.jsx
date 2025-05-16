import { useState } from 'react'
import s from './contato.module.scss'

export default function Contato(){
    
    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")
    const [texto,setTexto] = useState("")
    
    const capturaNome = (e) => {
        setNome(e.target.value)
    }

    const capturaEmail = (e) => {
        setEmail(e.target.value)
    } 

    const capturaTexto = (e) => {
        setTexto(e.target.value) 
    }

    const enviarDados = async() => {

        const dadosPEnviar = {
            nome,
            email,
            texto
        }

        await axios.post("https://formspree.io/f/xwpoyqov", dadosPEnviar)

        setMensagem("Mensagem enviada com sucesso")

        setNome("")
        setEmail("")
        setTexto("")

        setTimeout(() => {
            setMensagem("")
        }, 3000)
    }
    
    return(
        <section className= {s.main}>
            <section className={s.fundo}>
                <section className={s.contatos}>

                    <section className={s.tituloContatos}>
                        <p>Contatos</p>
                        <div className={s.borda}></div>
                    </section>

                    <section className= {s.descricaoContatos}>
                        <section className= {s.bordaContatos}>
                            <p>Caso queira falar comigo, é só preencher este formulário.</p>
                            
                            <form onSubmit={(e) => e.preventDefault()} method="POST">
                                <input className={s.texto} type="text" onChange={capturaNome} placeholder='Nome' required/>
                                <input className={s.texto} type="email" onChange={capturaEmail} placeholder='Email' required/>
                                <input className={s.mensagem} type="text" onChange={capturaTexto} placeholder='Mensagem' required/>
                                <input type="submit" value="Enviar" className={s.botao} onClick={enviarDados} />
                            </form>

                            {mensagem && (
                                <p className={s.mensagem}>{mensagem}</p>
                            )}
                            
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}