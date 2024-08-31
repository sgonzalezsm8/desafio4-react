import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//import RegisterPage from './components/RegisterPage'
//import LoginPage from './components/LoginPage'
import Cart from './components/Cart'
import Pizza from './components/Pizza'

function App() {

  return (
    <>
      <div className='d-flex flex-column min-vh-100'>
        <Navbar />
        {/*<Home/>*/}
          {/*<RegisterPage />*/}
          {/*<LoginPage/>*/}
          {/*<Cart/>*/}
          <Pizza/>
        <Footer />
      </div>
    </>
  )
}

export default App
