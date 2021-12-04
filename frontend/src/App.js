import data from "./data";

function App() {
  const products = data.products;
  return (
    <div className="App">
      <div className="grid-container">
        <header className="row">
          <div >
            <a className="brand" href="/">jsamazona</a>
          </div>
          <div className="">
            <a href="/signin">Sign-In</a>
            <a href="/cart">Cart</a>
          </div>
        </header>
        <main>
          <div className="row center">
            {products.map((product) => (
              <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                  <img className="medium" src={product.image} alt={product.name} />
                </a>
                <div className="card-body">
                <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <div className="price">$ {product.price}</div>
                </div>
              </div>
            ))}
           
          </div>
        </main>

        <footer>All rights reserved @2021</footer>
      </div>
    </div>
  );
}

export default App;
