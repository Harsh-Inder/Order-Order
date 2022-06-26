import Announcement from '../components/Announcement/Announcement'
import Categories from '../components/Categories/Categories'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'
import Footer from '../components/Footer/Footer'
import Newsletter from '../components/Newsletter/Newsletter'
import Products from '../components/Products/Products'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home