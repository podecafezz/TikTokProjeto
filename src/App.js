import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video likes={30} messages={10} shares={5} />

        <Video
          likes={30}
          messages={10}
          shares={5}
          name="Luis"
          description=" Passeio no Parque"
          music="Musiquinha TikTok"
          url="https://firebasestorage.googleapis.com/v0/b/tiktok-8ebf3.appspot.com/o/EBAC.mp4?alt=media&token=236af118-a6e0-4ef0-8ac6-be3bb45dc063"
        />
        <Video
          likes={25}
          messages={12}
          shares={3}
          name="podecafe"
          description=" Testando as artes das trevas"
          music="Som Original"
          url="https://firebasestorage.googleapis.com/v0/b/tiktok-8ebf3.appspot.com/o/V%C3%ADdeo%20do%20WhatsApp%20de%202023-03-29%20%C3%A0(s)%2021.17.40.mp4?alt=media&token=e2386677-ed2f-4925-b110-9186fb49abe2"
        />
        <Video
          likes={55}
          messages={15}
          shares={2}
          name="Luuuu"
          description=" Passeio no Parque 3"
          music="Musiquinha TikTok 3"
        />
      </div>
    </div>
  );
}

export default App;
