import './App.css';
import Header from './components/Header';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './components/Index';


function App() {
  const topDados = [
    {
    "id": 14,
    "link": "src= https://clips.twitch.tv/embed?clip=CarefulBoringAntFUNgineer-gvNqnbYIJOZVKy69&parent="+window.location.hostname,
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
    "link": "src= https://clips.twitch.tv/embed?clip=InterestingIncredulousFerretPJSugar-nbMrpBEeLnzX0NzR&parent="+window.location.hostname,
    "post_data": "Wed, 18 Jan 2023 00:13:16 GMT",
    "title": "Clipe da twitch"
    }
  ]

  const variosDados = [
    {
    "id": 17,
    "link": "src= https://www.youtube.com/embed/9iV_BFwL6ro",
    "post_data": "Wed, 18 Jan 2023 00:13:30 GMT",
    "title": "video do yt"
    },
    {
    "id": 18,
    "link": "src= https://clips.twitch.tv/embed?clip=BumblingMistyCiderStinkyCheese-K4gPgcqGk2bzhIAg&parent="+window.location.hostname,
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
    },
    {
    "id": 21,
    "link": "src=https://www.youtube.com/embed/9Zj0JOHJR-s",
    "post_data": "Wed, 18 Jan 2023 23:05:31 GMT",
    "title": "Living Tompstone "
    }
  ]

  console.log(window.location)

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Index topDados={topDados} variosDados={variosDados}/>} />
          <Route path='*' element="404 not found" />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
