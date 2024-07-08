import './assets/CSS/home.css'
import HomeImg from './assets/images/home.png'
import AboutImg from './assets/images/about2.png'
import SupportImg from './assets/images/about3.png'
import CheckImg from './assets/images/check.jpg'
import Play from './assets/images/play.png'
import AboutClimb from './assets/images/aboutClimb.png'
import { ColGrid, Team, subjects } from './components/Data'
import HomeGrid from './components/homeGrid'
import Features from './features'
import AboutVidoePop from './components/AboutVidoe'
import 'boxicons'
import { useState } from 'react'
import Subjects from './subjects'
import BackToTop from './components/BackToTop'
import TeamData from './components/TeamData'

const Home = () => {

    const [showAboutVideoPop, setShowAboutVideoPop] = useState(false)

    const handleAboutVideoPopFunction = () => {
        setShowAboutVideoPop(prevAction => !prevAction)
    }

    function cancelPopVideo () {
        setShowAboutVideoPop(
            prevAction => prevAction == false
        )
    }

    let animate

    if (showAboutVideoPop) {
        animate = 'fade_in'
    } else {
        animate = 'fade_out'
    }


  return (
    <>
        <div className="home_wrapper">
            <div className="home">
                <div className="main_what_to_see">
                    <div className='deww'>
                        <div className="render_left">
                            <div>
                                <div className="info">
                                    <div className="bold_head">
                                        <h2>
                                            Online Learning
                                        </h2>

                                        <h2>platform</h2>
                                    </div>

                                    <div className="normal">
                                        <p>Build Skills with Courses, Certificates and Degree Online from</p>
                                        <p>world class universities and companies</p>
                                    </div>
                                </div>

                                <div className="join_btn">
                                    <button>Join For Free</button>
                                </div>
                            </div>
                        </div>
                        <div className="render_right">
                            <div className="home_image">
                                <img src={HomeImg} alt="Home" />
                            </div>
                        </div>
                    </div>

                    <div className='we233'>
                        <div className="col">
                            {ColGrid.map((col, index) => {
                                return (
                                    <HomeGrid key={index} {...col} />
                                )
                            })}
                            
                        </div>
                    </div>

                    <div className="features">
                        <div className="features__container">
                            <div className="features_header">
                                <h2>Our featured courses</h2>
                            </div>

                            <div className="features_wrapper">
                                <Features />
                            </div>
                        </div>
                    </div>

                    <div className="about_area1">
                        <div className="about">
                            <div className="about_left">
                                <div className="about_icon">
                                    <div className="icon">
                                        <img src={AboutClimb} alt="" />
                                    </div>
                                </div>

                                <div className="about_area_title">
                                    <h2>Learn new skills online with top educators</h2>
                                    <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                                </div>

                                <div className="about_section_feature">
                                    <div className="section_feature1 sect">
                                        <div className="section_feature_icon">
                                            <div className="icon">
                                                <img src={CheckImg} alt="check" />
                                            </div>
                                        </div>

                                        <div className="section_feature_info">
                                            <span>Techniques to engage effectively with vulnerable children and young people.</span>
                                        </div>
                                    </div>
                                    <div className="section_feature2 sect">
                                        <div className="section_feature_icon">
                                            <div className="icon">
                                                <img src={CheckImg} alt="check" />
                                            </div>
                                        </div>

                                        <div className="section_feature_info">
                                            <span>Join millions of people from around the world learning together.</span>
                                        </div>
                                    </div>
                                    <div className="section_feature3 sect">
                                        <div className="section_feature_icon">
                                            <div className="icon">
                                                <img src={CheckImg} alt="check" />
                                            </div>
                                        </div>

                                        <div className="section_feature_info">
                                            <span>Join millions of people from around the world learning together.</span> <br />
                                            <span>Online learning is as easy and natural.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about_right">
                                <div className="right_image">
                                    <img src={AboutImg} alt="" />
                                    <div className="_play_icon">
                                        <span className='play_' onClick={handleAboutVideoPopFunction}>
                                            <img src={Play} alt="play" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="subjects_wrapper">
                        <div className="subjectss__">
                            <div className="subjects_title">
                                <h2>Explore top subjects</h2>
                            </div>

                            <div className="subjects_wrapper_content">
                                <div className="subject_main">
                                    {subjects.map((subject, index) => {
                                        return (
                                            <Subjects key={index} {...subject} />
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="subject_button">
                                <button>
                                    <a href="/Courses">
                                        View more Subjects
                                    </a>
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="supporter_area">
                        <div className="support">
                            <div className="support_image">
                                <img src={SupportImg} alt="support image" />
                            </div>

                            <div className="support_test">
                                <div className="testimonial_head">
                                    <h3>Learner outcomes on courses you will take</h3>
                                </div>

                                <div className="main_testimonial">
                                    <div className="testimo1 ghyt">
                                        <div className="testimo_icon">
                                            <img src={CheckImg} alt="check image" />
                                        </div>

                                        <div className="testimoni">
                                            <p>Techniques to engage effectively with vulnerable children and young people.</p>
                                        </div>
                                    </div>

                                    <div className="testimo2 ghyt">
                                        <div className="testimo_icon">
                                            <img src={CheckImg} alt="check image" />
                                        </div>

                                        <div className="testimoni">
                                            <p>Join millions of people from around the world learning together.</p>
                                        </div>
                                    </div>

                                    <div className="testimo3 ghyt">
                                        <div className="testimo_icon">
                                            <img src={CheckImg} alt="check image" />
                                        </div>

                                        <div className="testimoni">
                                            <p>Join millions of people from around the world learning together. Online learning is as easy and natural.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team_area">
                        <div className="team">
                            <div className="team_area_head">
                                <h2>Community Experts</h2>
                            </div>

                            <div className="team__">
                                {Team.map((team, index) => {
                                    return (
                                        <TeamData key={index} {...team} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="about_2_area">
                        <div className="about2">
                            <div className="about_2_left">
                                <img src={AboutImg} alt="about2 image" />
                            </div>

                            <div className="about_2_right">
                                <div className='about_right_head' style={{color:'blue'}}>
                                    <h1>Take the next step toward your personal and professional goals with us.</h1>
                                </div>
                                <div className='about_right_desc'>
                                    <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people</p>
                                </div>
                                <div className='about_right_button'>
                                    <button>Join Now for Free</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {showAboutVideoPop && <AboutVidoePop cancelPopVideo={cancelPopVideo} animate={animate} />}

        <BackToTop />
    </>
    
  )
}

export default Home