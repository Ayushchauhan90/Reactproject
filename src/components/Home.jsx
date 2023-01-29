import React from 'react'
import vg from '../assets/2.jpg'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
const Home = () => {
   return (
      <>
         <div className='home' id='home'>
            <main>
               <h1>Techystar</h1>
               <p>Solution to all your problems.</p>
            </main>
         </div>
         <div className='home2' id=''>
            <img src={vg} alt="effect" />
            <div>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was popularised in
                  the 1960s with the release of Letraset sheets containing Lorem</p>
            </div>
         </div>
         <div className="home3" id='about'>
            <div>
               <h1>Who we are ?</h1>
               <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                  It has roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin professor
                  at Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
                  through the cites of the word in classical literature, discovered the
                  undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                  1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on the
                  theory of ethics, very popular during the Renaissance. The first
                  line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
                  line in section 1.10.32.</p>
            </div>
         </div>
         <div className="home4" id='brands'>
            <div>
               <h1>Brands</h1>
               <article>
                  <div style={{
                     animationDelay: "0.1s",
                  }}>
                     <AiFillGoogleCircle />
                     <p>Google</p>
                  </div>

                  <div style={{
                     animationDelay: "0.3s",
                  }}>
                     <AiFillAmazonCircle />
                     <p>Amazone</p>
                  </div>

                  <div style={{
                     animationDelay: "0.5s",
                  }}>
                     <AiFillInstagram />
                     <p>Instagram</p>
                  </div>

                  <div style={{
                     animationDelay: "0.7s",
                  }}>
                     <AiFillYoutube />
                     <p>youtube</p>
                  </div>
               </article>
            </div>

         </div>
      </>
   )
}
export default Home;