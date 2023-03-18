import Card from '../Card'
import './TopContent.css'

const TopContent = ({itens, children}) =>{
    return (
        <section className={`TopContent`}>
            {children}
            {itens.map(item => <Card key={item.id} link={item.link} titulo={item.title} data= {item.post_data} />)}
        </section>
    )
}

export default TopContent