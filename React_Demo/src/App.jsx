import "./App.css";
import { meny } from "./components/Array.jsx"

function App() {
  return (
    <>
      {meny.map((item) => (
        <div className="MenyCard" key={item.id}>
          <h2>{item.tittel}</h2>
          <p className="Price">{item.pris}</p>
          <p className="Recipie">{item.ingredienser}</p>
          <p className="Category">{item.kategori}</p>
          <img className="Img_Meny" src={item.img} alt={item.tittel} />
          <button className="btn_Buy">{"buy"}</button>
            
          
        </div>
      ))}
    </>
  )
};

export default App;