import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import TopContent from './components/TopContent';
function App() {

  const dadosDaApi = [
    {
    "id": 14,
    "link": "src= https://clips.twitch.tv/embed?clip=CarefulBoringAntFUNgineer-gvNqnbYIJOZVKy69&parent=localhost ",
    "post_data": "Wed, 18 Jan 2023 00:11:41 GMT",
    "title": "Alanzoka seila"
    },
    {
    "id": 15,
    "link": "src= https://www.youtube.com/embed/9iV_BFwL6ro ",
    "post_data": "Wed, 18 Jan 2023 00:11:59 GMT",
    "title": "Video do yt"
    },
    {
    "id": 16,
    "link": "src= https://clips.twitch.tv/embed?clip=InterestingIncredulousFerretPJSugar-nbMrpBEeLnzX0NzR&parent=localhost ",
    "post_data": "Wed, 18 Jan 2023 00:13:16 GMT",
    "title": "Clipe da twitch"
    },
    {
    "id": 17,
    "link": "src= https://www.youtube.com/embed/9iV_BFwL6ro ",
    "post_data": "Wed, 18 Jan 2023 00:13:30 GMT",
    "title": "video do yt"
    },
    {
    "id": 18,
    "link": "src= https://clips.twitch.tv/embed?clip=BumblingMistyCiderStinkyCheese-K4gPgcqGk2bzhIAg&parent=localhost ",
    "post_data": "Wed, 18 Jan 2023 23:04:53 GMT",
    "title": "Post do Ludito"
    },
    {
    "id": 19,
    "link": "src= https://www.youtube.com/embed/t8MIt6_l9pc?t=1114 ",
    "post_data": "Wed, 18 Jan 2023 23:05:31 GMT",
    "title": "Video no yt no momento "
    },
    {
    "id": 20,
    "link": "src=https://www.youtube.com/embed/9Zj0JOHJR-s",
    "post_data": "Wed, 18 Jan 2023 23:05:31 GMT",
    "title": "Living Tompstone "
    }
  ]

  return (
    <div className="App">
      <Header />
      <Title>Gigantes da Semana</Title>
      <TopContent itens = {dadosDaApi}/>

      <Title>Estrelas em Ascenção</Title>
      <TopContent itens = {dadosDaApi} />

      <Title>Talvez Você Goste</Title>
      <TopContent itens = {dadosDaApi} />

    </div>
  );
}

export default App;
