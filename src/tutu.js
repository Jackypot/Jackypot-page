import React, { Component } from 'react'
import ExampleApp from './Modal'
import ReactPlayer from 'react-player'

import './App.css'

class Toto extends Component {

  state = {showModal: false};
 

  render() {
    const { showModal } = this.state
    
    return (
     
      <div className="Ap">
          <button
            className='btn_video sombras-c-g'
            onClick={() =>
              this.setState({
                showModal: !showModal
              })}
          >
            SHOW TUTORIAL
          </button>

          <ExampleApp open={showModal}
            onClose={() =>
              this.setState({
                showModal: false
              })}
          >
          
            <ReactPlayer height='100%' width='100%' url={this.props.video}/>
          </ExampleApp>
        
      </div>
    )
  }
}

export default Toto;