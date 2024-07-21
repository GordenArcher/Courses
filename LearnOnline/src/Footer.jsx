import 'boxicons'
import FooterLogo from './assets/G-KANAD.jpg'
import './assets/CSS/footer.css'

const Footer = () => {
  return (
    <div style={{marginTop: 80}}>
        <div className="footer">
            <footer>
                <div className="footer__-">
                    <div className="row container">
                        <div className='col1 jusify-content'>
                            <div className="col1_row">
                                <div>
                                    <div className="footer_logo">
                                        <a href="#!">
                                            <img src={FooterLogo} alt="logo" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="col1_text">
                                        <p>The automated process starts as soon as your clothes go into the machine.</p>
                                    </div>
                                </div>
                                <div style={{width:'100%', height:'100%'}}>
                                    <div className="col1_socials">
                                        <div style={{width:'100%', height:'100%'}}>
                                            <div className="social">
                                                <span>
                                                    <a href="https://github.com/GordenArcher" aria-details='github' target='_blank' >
                                                        <box-icon name='github' type='logo' color='#0000ff' ></box-icon>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{width:'100%', height:'100%'}}>
                                            <div className="social">
                                                <span>
                                                    <a href="https://www.linkedin.com/in/gordenarcher/" target='_blank' >
                                                        <box-icon name='linkedin' type='logo' color='#0000ff' ></box-icon>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{width:'100%', height:'100%'}}>
                                            <div className="social">
                                                <span>
                                                    <a href="https://www.instagram.com/iam_offence_sk" target='_blank' >
                                                        <box-icon name='instagram' type='logo' color='#0000ff' ></box-icon>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col3 jusify-content'>
                            <div className="dfg">
                                <div>
                                    <div className="col_hjk">
                                        <h5>Our solutions</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className="col_links">
                                        <ul>
                                            <li>
                                                <a href='#!'>
                                                    Design & creatives
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#!'>
                                                Telecommunication
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#!'>
                                                Restaurant
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#!'>
                                                    Programming
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#!'>
                                                Architecture
                                                </a>
                                            </li>  
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col2 jusify-content'>
                            <div className="dfg">
                                <div>
                                    <div className="col_hjk">
                                        <h5>Support</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className="col_links">
                                        <ul>
                                            <li>
                                                <a href='#!'>
                                                    Design & creatives
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#!'>
                                                Telecommunication
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#!'>
                                                Restaurant
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#!'>
                                                    Pgrogramming
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#!'>
                                                Architecture
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col4 jusify-content'>
                            <div className="dfg">
                                <div>
                                    <div className="col_hjk">
                                        <h5>Company</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className="col_links">
                                        <ul>
                                            <li>
                                                <a href='#!'>
                                                    Design & creatives
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#!'>
                                                Telecommunication
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#!'>
                                                Restaurant
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#!'>
                                                    Programming
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#!'>
                                                Architecture
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copy_right">
                        <span>Copyright ©2024 All rights reserved | </span>
                        <span>This template is made with  </span>
                        <span style={{marginLeft:6}}>by</span>
                        <span style={{marginLeft:6}}>
                            <a href="#!">Colorlib</a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Footer