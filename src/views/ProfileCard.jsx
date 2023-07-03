import Info from '../components/Info'
import About from '../components/About'
import Interest from '../components/Interests'
import Footer from '../components/Footer'
import './ProfileCard.css'
export default function ProfileCard(){
    return(
        <div className="card">
         <Info />
         <About />
         <Interest />
         <Footer />
        </div>
    )
}