import React from 'react';
import ReactDom from'react-dom';


import '../estilos/contact.css';


const Coontact = () => (
    <div className="contact" id="contact-window">
         <div className="container-contact">
            <div className="contactanos">
               <h2>Contact Us</h2>
               <form>
                  <input name="name" type="text" className="feedback-input" placeholder="Name" id="name" />
                  <input name="email" type="text" className="feedback-input" placeholder="Email" id="email" />
                  <textarea name="text" className="feedback-input" placeholder="Comment" id="comment"></textarea>
                  <input type="button" value="Send" onClick="datos_contactanos()" />
               </form>
            </div>
            <div className="informacion-adicional">
               <h2>If you have any questions or wish to get in touch with us directly enter:</h2>

               <table>
                   <tbody>
                  <tr>
                     <td>
                        <img src={require("../assets/footer/email.png")} alt=""/>
                     </td>
                     <td>
                        <p>Email:
                           <a href="mailto:contact@jackypot.io">contact@jackypot.io</a>
                        </p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <img src={require("../assets/footer/twitter.png")} alt=""/>
                     </td>
                     <td>
                        <p>Twitter:
                           <a href="https://twitter.com/JackypotEth" target="_blank" title="Twitter">@JackypotETH</a>
                        </p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <img src={require("../assets/footer/facebook.png")} alt=""/>
                     </td>
                     <td>
                        <p>Facebook:
                           <a href="https://www.facebook.com/jackypotofficial/" target="_blank" title="Facebook">Jackypotoficial</a>
                        </p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <img src={require("../assets/footer/reddit.png")} alt=""/>
                     </td>
                     <td>
                        <p>Reddit:
                           <a href="https://www.reddit.com/user/Jackypot-official/" target="_blank" title="Reddit">Jackypot-official</a>
                        </p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <img src={require("../assets/footer/youtube.png")} alt=""/>
                     </td>
                     <td>
                        <p>Youtube:
                           <a href="https://www.youtube.com/channel/UCgCKLBUzJ7Su14SgBio6dsA" target="_blank" title="Youtube">Jackypot.io</a>
                        </p>
                     </td>
                  </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>

  );

  export default Coontact;