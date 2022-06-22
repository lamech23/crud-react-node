import {  Routes,Route, } from "react-router-dom";
import ProductList from "./Components/ProductList";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";
import 'bulma/css/bulma.min.css';
 
function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
          <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            
          </Routes>
           
        </div>
      </div>
    </div>
  );
}
 
export default App;
 
