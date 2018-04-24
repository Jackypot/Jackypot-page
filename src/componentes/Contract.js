import React from 'react';
import ReactDom from'react-dom';

import '../estilos/contract.css';

const Contract = () => (
    <div className="contrato-transp" id="contrato-window">
    <h2>Contract</h2>
         <p>Our games are totally and completely open-source and free to use, enter to GitHub. All data are public and can be
            viewed at
            <a className='tip' href="https://www.etherscan.io" target="_blank">www.etherscan.io</a>
         </p>
         <ul className="git">
            <li>
            <img src={require("../assets/contract/git.png")} alt=""/>
               <a className='tip' href="https://github.com/Jackypot/Jackypot-slot" target="_blank">https://github.com/Jackypot/Jackypot-slot</a>
            </li>
         </ul>
         <ul className="eth">
            <li>
                    <img src={require("../assets/contract/eth.png")} alt=""/>
               <a className='tip' href="https://etherscan.io/address/0xfeac34425a3ba2fafbbeedb367ac5f4b4bb701d2#code" target="_blank">https://etherscan.io/address/0xfeac34425a3ba2fafbbeedb367ac5f4b4bb701d2#code</a>
            </li>
         </ul>
         <h2>Transparency</h2>
         <div className="container-transparencia">
            <p>Below is explained in detail, the process that is carried out in Jackypot.io</p>
            <img src={require("../assets/footer/diagrama.png")} alt="Image" className="img-fluid"/>
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
            <p>Users Contract Oraclize Smart Jackypot</p>
            <ol>
               <li>Users deposit the bet amount of Ethereum from their portfolio.</li>
               <li>Jackypot has Blockchain technology using an intelligent contract that runs transparently and securely.</li>
               <li>Our Oraclize provider who specializes in transparency connects with Random.org who are responsible for generating
                  the random numbers.</li>
               <li>Ramdom.org sends the random numbers that were generated to Oraclize.</li>
               <li>Oraclize sends the data to the intelligent contract.</li>
               <li>The contract interprets the results, calculates the prizes and directs them to the winners.</li>
               <li>The results are reflected in jackypot.</li>
            </ol>
            <p>Our game is based on the Blockchain, so each shipment is unique and encrypted. (Encrypted SHA3 method), which
               is equivalent to a set of infinite combinations between numbers, letters and signs, which makes it a secure
               method for your information since it prevents hacking of any kind and that is why Jackypot gives you the security
               of that will not be deciphered.</p>
            <p>Our policy is one of total transparency, since we have the high technology of the Blockchain that is connected
               to thousands of computers multiplying security, therefore no one else can alter or hack, this is confirmed
               by Ethereum.org; so the transaction and delivery of your prize are guaranteed in "Jackypot.io".</p>
            <p>This gives the Blockchain 100% security and is the reason why 176,727,709 million movements or transactions have
               been made since it was created; until the day this document was written.</p>
            <p>Different online games of chance offer high probabilities of winning a minimum of what is wagered, or offer misleading
               information as to the chances of the player having a profit. You can then verify this information in the following
               notes:
            </p>
            <p>
               <a className='tip' href="http://www.foxnews.com/story/2005/08/29/10-things-your-casino-wont-tell.html" target="_blank">http://www.foxnews.com/story/2005/08/29/10-things-your-casino-wont-tell.html</a>
            </p>
            <p>
               <a className='tip' href="http://www.dailymail.co.uk/news/article-2555025/Who-Lions-Share-Las-Vegas-slot-machine-hit-jackpot-20-years-attracts-generations-gamblers-eager-win-2-3-MILLION-prize.html"
                  target="_blank">http://www.dailymail.co.uk/news/article-2555025/Who-Lions-Share-Las-Vegas-slot-machine-hit-jackpot-20-years-attracts-generations-gamblers-eager-win-2-3-MILLION-prize.html</a>
            </p>
            <p>
               <a className='tip' href="http://triblive.com/aande/gambling/5509017-74/casino-player-percent" target="_blank">http://triblive.com/aande/gambling/5509017-74/casino-player-percent</a>
            </p>
            <p>That is why Jackypot is revolutionizing with the high technology of Blokchain applied in Ethereum, providing
               the best standards in security and speed, as well as having the possibility of winning up to 55.55% more,
               against what was determined in other sites of bets</p>
         </div>
      </div>
  );

 export default Contract;