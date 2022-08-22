import React from 'react';
import ModalVideo from 'react-modal-video';

const vidoeIDs = ['qnN9Zz6BBzs', 'I-stfb0L2lU']

class VideoModal extends React.Component {
 
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }
 
  render () {
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={vidoeIDs[1]} onClose={() => this.setState({isOpen: false})} />
          <div className="video-btn">
              <ul>
                  <li>
                    <button className="wrap" onClick={this.openModal}><i className="fi flaticon-play-button-2" aria-hidden="true"></i></button> 
                  </li>
              </ul>
          </div>
      </div>
    )
  }
}

export default VideoModal;