import React from 'react';
import '../styles/App.scss';
import images from '../images.json';
import '../styles/main.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default class All extends React.Component {
    state = {
        images: images.images,
        counter: 0,
        isOpen: false,
        src: undefined
    }

    render() {
        return (
            <div>
                {
                    this.state.counter === this.state.images.length ?
                        <ul className="gallery">
                            <div className="first">All Images</div>
                            {
                                this.state.images.map((img, i) => {
                                    return <li className={"gallery-item " + img.orientation}>
                                        <div className="img-container" style={{animationDelay: `${0.2 + (i*2)/10}s`}}>
                                            <img alt="" key={i} src={img.src} onClick={() => this.setState({ isOpen: true, src: img.src })}/>
                                            <div className="panel" onClick={() => this.setState({ isOpen: true, src: img.src })} >+</div>
                                        </div>
                                    </li>

                                })
                            }
                        </ul> : <div className="spinner"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
                }

                {
                    this.state.isOpen ?
                        <Lightbox
                            mainSrc={this.state.src}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            imageTitle="asijdaind"
                            className="lightbox"
                        /> : null
                }
            </div>
        );
    }

    componentDidMount() {
        this.state.images.forEach(picture => {
            let img = new Image();
            img.src = picture.src;
            img.onload = () => {
                console.log("loaded")
                this.setState({ counter: this.state.counter + 1 })
            }
        });
        
    }
}