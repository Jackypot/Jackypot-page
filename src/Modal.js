import React from 'react';
import PropTypes from 'prop-types';

import { Component } from 'react';
import Modal from './Modal';
import ReactModal from 'react-modal';
import './wrapper.css';
import './estilos/play.css';
import './modal.css'
import ReactPlayer from 'react-player'



class ExampleApp extends React.Component {
  render() {
    return this.props.open ? (
      <div>
        <div className="modal-background" />
        <div role="dialog" className="modal-dialog">
          <header className='header'>
            <span>TUTORIAL</span>
            <button
              onClick={() => this.props.onClose()}
              type="button"
              aria-label="close"
            >
              CLOSE
            </button>
          </header>
          <div className="modal-content">{this.props.children}</div>
        </div>
      </div>
    ) : null
  }
}

const props = {};
export default ExampleApp;