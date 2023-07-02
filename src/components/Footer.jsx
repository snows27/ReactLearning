import twittericon from '../images/twitter.png'
import facebookicon from '../images/facebook.png'
import instagramicon from '../images/instagram.png'
import githubicon from '../images/github-sign.png'
import './Footer.css'
export default function About(){
    return(
       <footer className="footer">
        <img src={twittericon} className="twitter-icon"/>
        <img src={facebookicon} className="facebook-icon"/>
        <img src={instagramicon} className="instagram-icon"/>
        <img src={githubicon} className="github-icon"/>
       </footer>
    )
}