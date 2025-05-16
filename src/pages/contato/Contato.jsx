import { useState, useEffect } from 'react'
import s from './contato.module.scss'
import axios from 'axios'

export default function Contato(){
    
    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")
    const [texto,setTexto] = useState("")
    const [mensagem,setMensagem] = useState("")
    
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

        setMensagem("")
        
        const dadosPEnviar = {
            nome,
            email,
            mensagem: texto
        }

        try{

            await axios.post("https://formspree.io/f/xwpoyqov", dadosPEnviar,{
                headers: {"Content-Type":"application/json"}
                }
            )
            
            setMensagem("Mensagem enviada com sucesso")
            setNome("")
            setEmail("")
            setTexto("")


            setTimeout(() => {
                setMensagem("")
            }, 3000)

        } catch (error) {
            console.error(error)
        }
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
                            
                            <form onSubmit={(e) => {e.preventDefault();enviarDados();}}>
                                <input className={s.texto} type="text" onChange={capturaNome} value={nome} placeholder='Nome' required/>
                                <input className={s.texto} type="email" onChange={capturaEmail} value={email} placeholder='Email' required/>
                                <textarea className={s.mensagem} onChange={capturaTexto} value={texto} placeholder='Mensagem' required/>
                                <input type="submit" value="Enviar" className={s.botao} />
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