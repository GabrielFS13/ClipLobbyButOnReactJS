import Card from '../Card'
import './TopContent.css'

const TopContent = ({itens}) =>{
    return (
        <section className="TopContent" >
            {itens.map(item => <Card key={item.id} link={item.link} titulo={item.title} data= {item.post_data} />)}
        </section>
    )
}

export default TopContent