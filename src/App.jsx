import Product from "./Components/Product";
import './styles/App.css';

function App() {
  return (
    <div>
      
      <header className="shop-header">
        <h1>Shop now</h1>
      </header>

     
      <div className="center-ui">
        <Product id={1} />
        <Product id={2} />
        <Product id={3} />
        <Product id={4} />
        <Product id={5} />
        <Product id={6} />
        <Product id={7} />
        <Product id={8} />
        <Product id={9} />
        <Product id={10} />
       
      </div>
    </div>
  );
}

export default App;
