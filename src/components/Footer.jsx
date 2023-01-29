import React from 'react'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
// import {HashLink} from 'react-router-hash-link'
const Footer = () => {
  return (
    <>
    <footer>
        <h1>Techystar</h1>
        <p>solution of all problems</p>
        <div className='footer-flex'>
        <div>
            <h3>Follow Us</h3>
            <article>
                <div>
                    <a href="https://www.squadhelp.com/name/techystar?lp=d"> <AiFillGoogleCircle/> </a>
                </div>
                <div>
                    <a href='https://www.instagram.com/accounts/login/'><AiFillInstagram/></a>
                </div>
                <div>
                    <a href='https://www.youtube.com/'><AiFillYoutube/></a>
                </div>
                <div>
                    <a href='https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_1jyasdi57f_e&adgrpid=60456322738&hvpone=&hvptwo=&hvadid=486459496700&hvpos=&hvnetw=g&hvrand=10614181531252533445&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9040183&hvtargid=kwd-295905178780&hydadcr=14451_2154369&gclid=CjwKCAiAyfybBhBKEiwAgtB7fvIqKRbPgNK66MRNaKJrAx8p38Tp1TO_4PACjGriIgEEDxxbVBTHqBoC9-gQAvD_BwE'><AiFillAmazonCircle/></a>
                </div>
            </article>
        </div>
        <div>
            <h3>Our Achievement</h3>
        </div>
        </div>
    </footer>
      
    </>
  )
}

export default Footer
