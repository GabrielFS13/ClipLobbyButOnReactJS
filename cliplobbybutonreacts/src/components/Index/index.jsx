import Title from '../Title';
import TopContent from '../TopContent';

export default function Index({topDados, variosDados}){

    return(
        <>
            <TopContent itens = {topDados}> 
                <Title>Gigantes da Semana</Title>
            </TopContent>

            <TopContent itens = {topDados}> 
                <Title>Estrelas em Ascensão</Title>
            </TopContent>

            <TopContent itens = {variosDados}> 
                <Title>Talvez você goste</Title>
            </TopContent>
        </>
    )
}