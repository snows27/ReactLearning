import logo from '../images/user-pic.jpeg'
import emailicon from '../images/email.png'
import linkedinicon from '../images/linkedin.png'
import './Info.css'
export default function Info(){
    return (
        <header className="information">
        <img src={logo} width="300px" height="300px" className="user-pic"/>
        <h1 className="name">Wuttichai Arayasook</h1>
        <p className="career">Frontend Developer</p>
        <p className="website">Nierfake website</p>
        <div className="button">
        <button className="email"><img src={emailicon} className="email-icon"/>Email</button>
        <button className="linkedin"><img src={linkedinicon} className="linkedin-icon"/>LinkedIn</button>
        </div>
        </header>
        )
}