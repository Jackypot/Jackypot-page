import React from 'react';
import ReactDom from'react-dom';

import Slot from './Slot';
import '../wrapper.css';
import '../estilos/play.css';
import ExampleApp from '../Modal';
import Yao from '../Api';
import Toto from '../tutu';



const Play = () => (
    <div className='conenedor-global'>
      <div className='wrapper'>
            <div className="box introduction luces-largas" id="intr">
                <div className="container-introduction">
                   <div className="tittle-how-to-play">
                      <h3>HOW TO PLAY</h3>
                   </div>
                   <div className="cuerpo-how-to-play">
                      <p>1. Open some of these wallets.</p>
                      <div className="wallets">
                         <ul>
                            <li>
                               <a href="https://www.myetherwallet.com/" title="MyEtherWallet" target="_blank">
                                  <img src={require("../assets/how-to-play/01.png")} alt="" className="img-fluid"/>
                               </a>
                            </li>
                            <li>
                               <a href="https://ethereum.org/" title="Mist" target="_blank">
                                  <img src={require("../assets/how-to-play/02.png")} alt="" className="img-fluid"/>
                               </a>
                            </li>
                            <li>
                               <a href="https://metamask.io/" title="MetaMask" target="_blank">
                                  <img src={require("../assets/how-to-play/03.png")} alt="" className="img-fluid"/>
                               </a>
                            </li>
                            <li>
                               <a href="https://jaxx.io/" title="Jaxx" target="_blank">
                                  <img src={require("../assets/how-to-play/04.png")} alt="" className="img-fluid"/>
                               </a>
                            </li>
                            <li>
                               <a href="https://www.exodus.io/" title="Exodus" target="_blank">
                                  <img src={require("../assets/how-to-play/05.png")} alt="" className="img-fluid"/>
                               </a>
                            </li>
                         </ul>
                      </div>
                      <p >2. Send the amount of ETH you want to bet on this address:</p>
                      <p className="text-small">(Bet min 0.01 ETH - Bet max: 20 ETH)</p>
                      <div className="popover__wrapper">
                         <p className="address-game" id="address-game" data-clipboard-text="0xFeac34425a3Ba2FAfbbEEDB367aC5F4b4bB701D2">0 x F e a c 3 4 4 2 5 a 3 B a 2 F A f b b E E D B 3 6 7 a C 5 F 4 b 4 b B 7 0 1 D 2</p>
                         <div className="push popover__content">
                            <p>Data required for transactions:
                               <br/> Gas required: 300,000.
                               <br/> Gwei required: 21.</p>
                         </div>
                      </div>
                      <p>Wait for the result from 1 to 2 minutes, in
                         <a title="Results" onclick="getfocus()" className="links">LAST BET</a>.</p>
                      <p>3. Our prizes are:</p>
                      <div className="contenedor-premios">
                         <img src={require("../assets/how-to-play/premio1.png")} alt="" className="img-fluid"/>
                         <img src={require("../assets/how-to-play/premio2.png")} alt="" className="img-fluid"/>
                         <img src={require("../assets/how-to-play/premio3.png")} alt="" className="img-fluid"/>
                         <img src={require("../assets/how-to-play/premio4.png")} alt="" className="img-fluid"/>
                      </div>
                      <div className="all-prizes" id="all-prizes">
                         <img src={require("../assets/how-to-play/4.png")} alt="" className="img-fluid"/>
                         <img src={require("../assets/how-to-play/6.png")} alt="" className="img-fluid"/>
                         <img src={require("../assets/how-to-play/11.png")} alt="" className="img-fluid"/>
                         <img src={require("../assets/how-to-play/8.png")} alt="" className="img-fluid"/>
                         <img src={require("../assets/how-to-play/9.png")} alt="" className="img-fluid"/>
                         <img src={require("../assets/how-to-play/7.png")} alt="" className="img-fluid"/>
                         <img src={require("../assets/how-to-play/15.png")} alt="" className="img-fluid"/>
                         <img src={require("../assets/how-to-play/12.png")} alt="" className="img-fluid"/>
                         <img src={require("../assets/how-to-play/13.png")} alt="" className="img-fluid"/>
                         <img src={require("../assets/how-to-play/10.png")} alt="" className="img-fluid"/>
                         <img src={require("../assets/how-to-play/14.png")} alt="" className="img-fluid"/>
                         <table className="representation-trans">
                            <thead>
                               <tr>
                                  <th className="borde-vertical">Symbols</th>
                                  <th>Representation</th>
                               </tr>
                            </thead>
                            <tbody>
                               <tr>
                                  <td className="borde-vertical borde-horizontal">
                                     <img src={require("../assets/game/slot/1.svg")} alt="Cereza"/>
                                  </td>
                                  <td className="borde-horizontal"> = 1, 2, 3</td>
                               </tr>
                               <tr>
                                  <td className="borde-vertical borde-horizontal">
                                     <img src={require("../assets/game/slot/2.svg")} alt="Cereza"/>
                                  </td>
                                  <td className="borde-horizontal"> = 4, 5, 6</td>
                               </tr>
                               <tr>
                                  <td className="borde-vertical borde-horizontal">
                                     <img src={require("../assets/game/slot/3.svg")} alt="Cereza"/>
                                  </td>
                                  <td className="borde-horizontal"> = 7, 8, 9</td>
                               </tr>
                            </tbody>
                         </table>
                      </div>
                      <button id="boton2" className="btn-prizes sombras-c-g" onclick="mostrar_premios()">SHOW MORE PRIZES</button>
                      <p>4. The prize will be sent automatically in your wallet.</p>
                      <p>5. Good luck!</p>
                   </div>
                </div>
             </div>
             
             <div className="box content" id="conte">
            
                <div className="tittle-game">
                   <h3>JACKPOT GAME</h3>
                </div>
                <div className="container-game">
                <Slot imagen="https://awebanalysis.com/img/coins/64/ethereum.png" slot="1"/>
                <Slot imagen="https://awebanalysis.com/img/coins/64/ethereum.png" slot="2"/>
                <Slot imagen="https://awebanalysis.com/img/coins/64/ethereum.png" slot="3"/>
                   {/* <div className="machine">
                    
                      <div className="img-machine">
                         <svg id="svg"> </svg>
                         
                         <p id="pote">Loading...</p>
                      </div>
                   </div> */}
                   
                   <div className="address-machine" id="contenedor_address_machine">
                      
                      <div className="contenedor-address">
                         <p className="remove" id="address-machine">Ethereum Wallet Address Of The Participant</p>
                      </div>
                    
                   </div>
                   <div className="bet" id="contenedor_apuesta_machine">
                      
                      <div className="contenedor-profit">
                         <p className="remove" id="bet-machine">Profit</p>
                      </div>
                   </div>
                   <div className="btn-play" id="contenedor_btn_machine">
                      
                      <input type="image" src={require("../assets/game/btn-play.png")} onclick="openModal(this.id)" id="how-play"/>
                   </div>
                </div>
                <div className="contenedor_video">
                
                   <Toto video="https://www.youtube.com/watch?v=6M_nY-l4aNI"/>
                   
                </div>
             </div>
             
             <div className="box information" id="chat">
                <div className="tittle-chat" onclick="change_focus()">
                   <h3>
                      <span id="tittle-chat-span">CHAT </span>/
                      <span id="tittle-table-span" className="activo"> LAST BET</span>
                   </h3>
                </div>
                <div id="datos">
                {<Yao />}
                </div>
                <div className="chat" id="chat-con">
                    
                   <div id="disqus_thread"></div>
                   
                   <noscript>Please enable JavaScript to view the
                      <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
                   </noscript>-->
                </div> 
             </div>
        </div>
    </div>
        
    );

export default Play;