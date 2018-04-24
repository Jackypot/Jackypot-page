import Anime from 'react-anime';
import React from 'react';
import ReactDom from'react-dom';
import '../estilos/mech.css';

class Slot extends React.Component{
    constructor(props) {
        super(props);
        this.state = {girando:true};
        this.handleClick = this.handleClick.bind(this);
        this.detener = this.detener.bind(this);
      }
      detener(info) {
        console.log(info);
      }
      handleClick(info) {
        console.log(info);
      }


    render(){
        return    <Anime easing="linear"
                    loop={8}
                    duration={800}
                    translateY='13rem'>
                    
                <div>
                    
                <img scale='.5' src={this.props.imagen}></img>

                </div>
            </Anime>
}
}

export default Slot;