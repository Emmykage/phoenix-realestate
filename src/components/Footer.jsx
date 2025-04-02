import React from 'react'
import logo from '../assets/images/logo1.jpg'

const Footer = () => {
  return (
    <div>   

        <footer id="footer">
            <div className="container m-auto px-4">
                <div className="row grid md:grid-cols-4 gap-6">
                    <div className="col-lg-3 col-md-3 col-sm-4 widget footer-widget">
                        <a className="footer-logo" href="index.html">
                            <img src={"logos/logo-white.png"} alt="Homely" /></a>
                        <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Sed ut 
                        purus eget nunc ut dignissim cursus at a nisl. Mauris vitae 
                        turpis quis eros egestas tempor sit amet a arcu. Duis egestas 
                        hendrerit diam.</p>
                        <div className="divider"></div>
                        <ul className="social-icons circle">
                            <li><a href="#" className='text-gray-200'><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 widget footer-widget from-the-blog">
                        <h4><span>From the Blog</span> <img src="images/divider-half.png" alt="" /></h4>
                        <ul>
                            <li>
                            <a href="#"><h3>Open House at 123 Smith Drive</h3></a>
                            <p>Vel fermentum ipsum. Quis molestie odio. Interdum et...<br/> <a href="#">Read More</a></p>
                            <div className="clear"></div>
                            </li>
                            <li>
                                <a href="#"><h3>Open House at 123 Smith Drive</h3></a>
                                <p>Vel fermentum ipsum. Quis molestie odio. Interdum et...<br/> <a href="#">Read More</a></p>
                                <div className="clear"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 widget footer-widget">
                        <h4><span>Get In Touch</span> <img src="images/divider-half.png" alt="" /></h4>
                        <p>123 Smith Drive<br/>
                        Annapolis, MD 21012<br/>
                        United States
                        </p>
                        <p>
                        <b className="open-hours">Open Hours</b><br/>
                        Mondy - Friday: 9 am - 5 pm<br/>
                        Saturday: 9 am - 1pm<br/>
                        Sunday: Closed
                        </p>
                        <p className="footer-phone"><i className="fa fa-phone icon"></i> (123) 456-7890</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 widget footer-widget newsletter">
                        <h4><span>Newsletter</span> <img src="images/divider-half.png" alt="" /></h4>
                        <p><b>Subscribe to our newsletter!</b> Vel lorem ipsum. Lorem molestie odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                        <form className="subscribe-form" method="post" action="#">
                            <input type="text" name="email" value="Your email" />
                            <input type="submit" name="submit" value="SEND" className="button small alt" />
                        </form>
                    </div>
                </div>
            </div>
        </footer>

        <div className="bottom-bar">
            <div className="container m-auto">
            © 2017  |  Homely - A theme by <a href="http://rypecreative.com/" target="_blank">Rype Creative</a>  |  All Rights Reserved
            </div>
        </div>
    </div>
  )
}

export default Footer