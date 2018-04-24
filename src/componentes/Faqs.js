import React from 'react';
import ReactDom from'react-dom';

import '../estilos/faqs.css';


const Faqs = () => (
    <div className="faqs" id="faqs-window">
          <h2>Frequent questions</h2>
         <div className="container-faqs">
         <h4>What is Jackypot?</h4>
            <p>It is a slots game with an accumulated prize that uses the technology of the Blockchain of Ethereum. It is conformed
               by the following characteristics:</p>

            <ol>
               <li>It is the only one that uses ETHER cryptocurrency.</li>
               <li>Automated payments.</li>
               <li>Use an intelligent contract to perform each of its operations.</li>
               <li>Each shooting probability is transparent and reliable.</li>
               <li>The only requirement you need is an electronic portfolio of ETHEREUM.</li>
            </ol>
            <h4>Is it safe to play Jackypot?</h4>
            <p>Our game is based on Blockchain Technology, so each shipment is unique and encrypted. (Encrypted SHA3 method),
               which is equivalent to a set of infinite combinations between numbers, letters and signs, which makes it a
               secure method for your information since it prevents hacking of any kind and that is why Jackypot gives you
               the security of that will not be deciphered.</p>
            <h4>How to play Jackypot?</h4>
            <ol>
            <li>Go to your ETH portfolio</li>
            <li>
            <div className="popover__wrapper">
            <p className="address-game" id="address-game" data-clipboard-text="0xFeac34425a3Ba2FAfbbEEDB367aC5F4b4bB701D2">0 x F e a c 3 4 4 2 5 a 3 B a 2 F A f b b E E D B 3 6 7 a C 5 F 4 b 4 b B 7 0 1 D 2</p>
            <div className="push popover__content">
            <p>
            Data required for transactions:
                           <br/> Gas required: 300,000.
                           <br/> Gwei required: 21.
            </p>
            </div>
            </div>
            </li>
            <li>The amount between 0.01 Ether up to 20 Ether what you want to play.</li>
            <li>Complete your transaction and Done</li>
                
            </ol>
            <h4>What wallets are used?</h4>
            <div className="wallets">
                <ul>
                    <li>
                    <a href="https://www.myetherwallet.com/" title="MyEtherWallet" target="_blank">
                    <img src={require("../assets/how-to-play/01.png")} alt="" className="img-fluid" />
                        
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
            <p>* all portfolios that accept betting games.</p>
            <h4>What is the minimum and maximum bet?</h4>
            <p>The bet minina in Jackypot is 0.01 Eth, up to 20 ETH as Maximum.</p>
            <h4>How are the prizes in Jackypot?</h4>
            <table className="table">
               <thead>
                  <tr>
                     <th className="borde-vertical">Ways to Win</th>
                     <th className="borde-vertical">Examples</th>
                     <th className="borde-vertical">That is to say</th>
                     <th>Figures</th>
                  </tr>
               </thead>
               <tbody>

                    <tr>
                    <td className="borde-vertical borde-horizontal">Triple Figures</td>
                        <td className="borde-vertical borde-horizontal">Suppose you bet 1ETH and fall Currency & Currency & Currency. With this combination, you win your bet
                        of 1ETH x 3 = 3 ETH.
                        </td>
                        <td className="borde-vertical borde-horizontal">Get 300% of your bet
                        </td>
                        <td className="borde-horizontal">
                        <img src={require("../assets/faqs/triple.png")} alt="Triple coins" />
                        </td>
                     
                    </tr>
                    <tr>
                    <td className="borde-vertical borde-horizontal">Doubles Figures</td>
                     <td className="borde-vertical borde-horizontal">Suppose you bet 1ETH and fall Cherry & Cherry & Seven. With this combination, you win your bet of 1
                        ETH x1.1 = 1.1 ETH.</td>
                     <td className="borde-vertical borde-horizontal">Get 110% of your bet.</td>
                     <td className="borde-horizontal">
                        <img src={require("../assets/faqs/dobles.png")} alt="Double cherrys"/>
                     </td>
                    </tr>

               </tbody>
            </table>
            <p>* Prize payments are automated</p>
            <h4>How many chances do I have to win in Jackypot?</h4>
            <p>You have the possibility to win up to 55.55% in prizes, contrary to what is determined in other betting sites.</p>
            <h4>Does Jackypot intervene in the results of the games?</h4>
            <p>Our game always gives a random result through the request we make to Oraclize, a company specializing in the
               transfer of: information, security and those who act as a data provider, which they request from Random.org,
               which is a service of generation of random information and thus these results are generated.</p>
            <p>That is, we do not intervene with the results of each game.</p>
            <h4>Is only Ethereum Cryptocurrency used?</h4>
            <p>At the moment Jackypot only uses the Ethereum coin.</p>
            <h4>Do you have Tutorials about Jackypot?</h4>
            <a href="https://www.youtube.com/watch?v=C3q54d83qq4&feature=youtu.be" target="_blank">
               <button type="button" name="button" className="tutorial">Go Tutorial</button>
            </a>
            <h4>News about Jackypot:</h4>
            <a href="https://bitcoiner.today/en/jackypot-the-first-jackpot-in-the-world-with-blockchain-technology/" target="_blank">
               <button type="button" name="button" className="bitcoiner-today">BitcoinToday</button>
            </a>
            <a href="https://cryptocurrencyhub.io/jackypot-the-first-jackpot-on-the-world-with-the-blockchain-s-technology-90bc7efcf04e"
               target="_blank">
               <button type="button" name="button" className="medium">Medium</button>
            </a>
            <a href="https://steemit.com/blockchain/@jaimeeaton/jackypot-the-first-jackpot-on-the-world-with-the-blockchain-s-technology"
               target="_blank">
               <button type="button" name="button" className="steemit">Steemit</button>
            </a>
            <h2>General questions:</h2>
            <h4>What is the smart contract?</h4>
            <p>This is a program code that allows you to automatically perform certain functions when certain conditions occur.
               To implement smart contracts, a decentralized environment that completely excludes the human factor is required.
               To use the transfer of value in an intelligent contract, it requires a cryptocurrency.</p>
            <h4>What is Blockchain?</h4>
            <p>Blockchain is a distributed database that does not have storage devices connected to a shared server. This database
               stores a constantly growing list of ordered records, called blocks. Each block contains a timestamp and a
               link to the previous block.</p>
            <h4>What is the process used in Jackypot?</h4>
            <ol>
               <li>Users deposit the bet amount of Ethereum from their portfolio.</li>
               <li>Jackypot has Blockchain technology using an intelligent contract that runs transparently and securely.</li>
               <li>Our Oraclize provider who specializes in transparency connects with Random.org who are responsible for generating
                  the random numbers.</li>
               <li>Ramdom.org sends the random numbers that were generated to Oraclize.</li>
               <li>Oraclize sends the data to the intelligent contract.</li>
               <li>The contract interprets the results, calculates the prizes and directs them to the winners.</li>
               <li>The results are reflected in Jackypot</li>
            </ol>
         </div>  
    </div>
  );
  export default Faqs;