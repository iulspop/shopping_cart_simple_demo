import Cart from './Cart'
import ProductList from './ProductList'
import AddProductForm from './AddProductForm'

const App = () => (
  <div id="app">
    <header>
      <h1>The Shop!</h1>
      <Cart />
    </header>

    <main>
      <ProductList />
      <AddProductForm />
    </main>
  </div>
)

export default App
