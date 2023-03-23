import React from 'react'
import './features.css'
import Feature from '../../components/Feature/Feature'

const featuresData = [
    {
        title: "Melhorando as desconfianças finais instantaneamente",
        text: "Dos finos joão ele dá de rico ele. Eles envelhecem e desenham a sra. Melhorar as desconfianças finais pode instantaneamente ser aplaudido pela família."
    },
    {
        title: "Torne-se o ativo ativo",
        text: "Considerado simpatizar com dez assistência incomumente ocasional não suficiente. Carta de em tornar-se ele tendia a permitir."
    },
    {
        title: "Mensagem ou não sou nada",
        text: "Led pergunta a possível elegância da relação com a amante come da mesma forma debatendo. Por mensagem ou não sou nada entre principalmente endereço."
    },
    {
        title: "Condado de direito realmente menino",
        text: "Realmente, o condado de direito do menino, ela impediu sua irmã. Pés você fora como seis. Entre o sexo são leis de licença construídas agora. Em mesa embutida em um rápido blush."
    }
]

const Features = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">
                    O Futuro é Agora e Você Só Precisa Concretizá-lo.
                    Entre no futuro hoje e faça acontecer.
                </h1>
                <p>Solicite acesso antecipado para começar</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features