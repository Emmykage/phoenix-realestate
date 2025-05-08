import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../redux/actions/blog'
import { NavLink, useNavigate } from 'react-router-dom'

const Footer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
          const {posts: press} = useSelector(state => state.blog_posts)
      useEffect(()=> {
        dispatch(getPosts())
      },[])

  return (
    <div className='px-0'>   

        <footer id="footer" className='px-4 overflow-' >
            <div className="container m-auto">
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="">
                        <NavLink className="footer-logo" to="/">
                            <img src={"/logos/16.png"} alt="Homely" /></NavLink>
                        <p>PHEONIX PRECAST LTD (11231705) is a Manchester & London-based, proven property investment specialist with a 12-year history in the property investment business.</p>
                        <div className="divider"></div>
                        <ul className="social-icons circle">
                            <li><a href="#" className='text-gray-200'><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          
                        </ul>
                    </div>
                    <div className="">
                        <h4 className='mb-7'><span>From the Blog</span> <img src="images/divider-half.png" alt="" /></h4>
                        <ul>
                            {press?.slice(0,2).map(item => (
                                <li className='cursor-pointer mb-4'>
                                    <p><h3 className='  overflow-hidden text-ellipsis text-xl text-white'>{item?.title}</h3></p>
                                    <p className='hover:text-theme-pry'>{item?.description}<br/> 
                                    <NavLink className={"text-base text-alt"} to={`/press-release/${item.id}`}>Read More</NavLink></p>
                                    <div className="clear"></div>
                                </li>
                            ))}
                          

                        </ul>
                    </div>
                    <div className="">
                     <h4 className='mb-7'><span>Get In Touch</span> <img src="images/divider-half.png" alt="" /></h4>
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
                    <div className=" newsletter">
                        <h4 className='mb-7'><span>Newsletter</span> <img src="images/divider-half.png" alt="" /></h4>
                        <p><b>Subscribe to our newsletter!</b> 
                        <br/>
                        Stay tuned for exclusive investment opportunities, real estate insights, and early access to new property listings.
                         {/* We’re excited to have you on this journey toward building lasting wealth through smart property investments. */}
                         </p>
                         <form className="subscribe-form bg-re px-0" method="post" action="#">
                            <input type="text" name="email" value="Your email" />
                            <input type="submit" name="submit" value="SEND" className="button small alt w-full" />
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