import React from 'react';
import ReactDom from'react-dom';
import Toto from '../tutu'
import '../estilos/freebets.css'

const FreeBets = () => (
    <div className="free-bets" id="free-bets-window">
       
         <div className="contenedor-free-bets">
        
            <div className="free-bets-promocion">
                <h1 className="verde">LAUNCHING OFFER: 2,000 FREE BETS!</h1>
                <p className="amarillo">have you reacived 0.00 ether in your ethereum wallet from Jackypot?, Congratulations! you have a Free Bet </p>
                <p className="blanco">to do your free bet follow these instructions</p>
                <p className="blanco"><a className="amarillo">STEP 1 :</a> Send 0.00 ether to the following address (The gas is calculated automatically by our contract or otherwise put 300 000)</p>
                <p className="address-game blanco" id="address-game" data-clipboard-text="0xFeac34425a3Ba2FAfbbEEDB367aC5F4b4bB701D2">0 x F e a c 3 4 4 2 5 a 3 B a 2 F A f b b E E D B 3 6 7 a C 5 F 4 b 4 b B 7 0 1 D 2</p>
                <p className="blanco"><a className="amarillo">STEP 2 :</a> Check your results in the table "Last Bet", which you could find in the Main page of "jackypot.io"</p>
                <p className="blanco fix2">Enjoy your prize</p>
                <div className="btn_video sombras-c-g tut">
                
                <Toto video="https://www.youtube.com/watch?v=6RhL7scOics"/>
                   
                </div>
               
               
            </div>
            
             <div className="free-bets-datos" id="contenedor-free-bets">
               
                        <h1 className="is-size-1">Check Your Free Bets</h1>
                        <p><label className="label has-text-white is-medium">Insert your "ethereum address" of your wallet and check how many free bets you have</label></p>
                        <input id="tt" className="input" type="text" placeholder="Paste your ethereum addres here"/>
                        <div id="mensaje" className="invisible"><h3>Your address doesnt have a Free Bet</h3>
                        </div>
                        

            </div>
            <div className="free-bets-chat">
                    
               
            </div>
        </div>
    </div>
 
);

export default FreeBets;