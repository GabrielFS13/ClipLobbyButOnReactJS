import './Card.css'

const Card = ({link, data, titulo}) =>{
    const link_formated = link.replace('src=', '')
    return (
        <div className="content-card" >
            <h2>{titulo}</h2>
            <iframe src={link_formated} title={titulo} width="500" height="250" />
            <span>Data: {data}</span>
        </div>
    )
}

export default Card