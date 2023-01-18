import Img1 from './images/head.png'

export default function Info() {

    const getEmail = () => {
        window.open("mailto:ryanh797@gmail.com", "_blank")
    }

    const getResume = () => {
        window.open("https://drive.google.com/file/d/1Ndh3Y_6mpxfPFGp1wKZnHzFpSBI1LAEv/view?usp=sharing", "_blank")
    }

    return (
        <nav className="info">
            <img src={Img1} className="image" />
            <h1 className="info-h1">Ryan Hayame</h1>
            <h2 className="info-h2">Software Developer</h2>
            <a className="info-a" href="https://ryanhayame.github.io/portfolio/index.html" target="_blank" rel="noopener noreferrer">
                ryanhayame.github.io/portfolio
            </a>
            <div className="info-buttons">
                <button id="email" onClick={getEmail}>
                    <div className="buttonText">
                        <i class="fa-solid fa-envelope"></i>
                        <h3 className="emailText">Email</h3>
                    </div>
                </button>
                <button id="resume" onClick={getResume}>
                    <div className="buttonText">
                        <i class="fa-solid fa-file"></i>
                        <h3 className="resumeText">Resume</h3>
                    </div>
                </button>
            </div>
        </nav>
    )
  }


