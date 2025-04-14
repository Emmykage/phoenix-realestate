import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../redux/actions/blog'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const dispatch = useDispatch()
          const {posts: press} = useSelector(state => state.blog_posts)
      useEffect(()=> {
        dispatch(getPosts())
      },[])

  return (
    <div>   

        <footer id="footer">
            <div className="container m-auto px-4">
                <div className="row grid md:grid-cols-4 gap-6">
                    <div className="col-lg-3 col-md-3 col-sm-4 widget footer-widget">
                        <a className="footer-logo" href="index.html">
                            <img src={"/logos/16.png"} alt="Homely" /></a>
                        <p>PHEONIX PRECAST LTD (11231705) is a Manchester & London-based, proven property investment specialist with a 12-year history in the property investment business.</p>
                        <div className="divider"></div>
                        <ul className="social-icons circle">
                            <li><a href="#" className='text-gray-200'><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 widget footer-widget from-the-blog">
                        <h4><span>From the Blog</span> <img src="images/divider-half.png" alt="" /></h4>
                        <ul>
                            {press?.slice(0,2).map(item => (
                                <li>
                                    <p><h3>{item?.title}</h3></p>
                                    <p>{item?.description}<br/> <NavLink  to={`/press-release/${item.id}`}>Read More</NavLink></p>
                                    <div className="clear"></div>
                                </li>
                            ))}
                          

                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 widget footer-widget">
                        <h4><span>Get In Touch</span> <img src="images/divider-half.png" alt="" /></h4>
                        <p>2-3 Little Burrow, <br/>
                        Welwyn Garden City, Herts, AL7 4SP<br/>
                        England
                        </p>
                        <p>
                        <b className="open-hours">Open Hours</b><br/>
                        Mondy - Friday: 9 am - 5 pm<br/>
                        Saturday: 9 am - 1pm<br/>
                        Sunday: Closed
                        </p>
                        <p className="footer-phone"><i className="fa fa-phone icon"></i> +44757800966</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 widget footer-widget newsletter">
                        <h4><span>Newsletter</span> <img src="images/divider-half.png" alt="" /></h4>
                        <p><b>Subscribe to our newsletter!</b> 
                        {/* Vel lorem ipsum. Lorem molestie odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. */}
                         </p>
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
            © 2013-2025| <a href="http://rypecreative.com/" target="_blank">Pheonix Precast Limited -</a>  |  All Rights Reserved
            </div>
        </div>
    </div>
  )
}

export default Footer