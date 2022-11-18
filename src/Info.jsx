import Img1 from './images/head.png'

export default function Info() {

    const getEmail = () => {
        window.open("mailto:ryanh797@gmail.com", "_blank")
    }

    const getResume = () => {
        window.open("https://drive.google.com/file/d/1R42mGswGIqObSWt-yvKVTlv5y-KJGHrC/view?usp=sharing", "_blank")
    }

    return (
        <nav className="info">
            <img src={Img1} className="image" />
            <h1 className="info-h1">Ryan Hayame</h1>
            <h2 className="info-h2">Software Developer</h2>
            <h3 className="info-h3">ryanhayame.github.io/portfolio</h3>
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


