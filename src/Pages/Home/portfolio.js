import './portfolio.css'


const Portfolio = () => {
    return (

        <div className="home container" id="#home">
            <div className="left-cont">
                <div className="profile-img">
                    <img src="/mani-img.jpeg" alt="profile image" />
                </div>
            </div>
            <div className="right-cont">
                <div className="profile-info">
                    <h1>Mani Kumar</h1>
                    <p>I'm a UI/UX <br /><b>Designer</b></p>
                    <p className="profile-text">With 2 years of experience in the field of ui/ux design,
                        i have a strong foundation in the latest design trends and technologies. My expertise
                        lies in creating visually appealing and user-friendly interfaces that enhance the overall
                        user experience.</p>
                    <a href="./mani-img.jpeg" target="_blank" download className="btn-download">Download CV</a>
                </div>
            </div>
        </div>

    )
}
export default Portfolio
