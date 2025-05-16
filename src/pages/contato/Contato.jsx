import s from './contato.module.scss'

export default function Contato(){
    
    const nome = document.getElementById("nome")
    const email = document.getElementById("email")
    const texto = document.getElementById("texto")
    const [mensagem, setMensagem] = useState("")
    
    function mensagem(){
        setMensagem("Mensagem enviada com sucesso")

        nome("")
        email("")
        texto("")

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
                            
                            <form action="https://formspree.io/f/xwpoyqov" method="POST" accept-charset="UTF-8">
                                <input className={s.texto} type="text" id='nome' placeholder='Nome' required/>
                                <input className={s.texto} type="email" id='email' placeholder='Email' required/>
                                <input className={s.mensagem} type="text" id='mensagem' placeholder='Mensagem' required/>
                                <input type="hidden" name="_replyto" value=""></input>
                                <input type="submit" value="Enviar" className={s.botao} onClick={mensagem} />
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