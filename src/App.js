import React from 'react';
import './styles/App.scss';
import images from './images.json';
import Navigation from './components/Navigation'
import './styles/main.scss';
import './styles/home.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import All from './components/All';
import Category from './components/Category';

class App extends React.Component {
    state = {
        images: images.images,
        imagesAsElement: [],
        loaded: false,
        counter: 0,
        isOpen: false,
        src: undefined
    }

    render() {
        return (
            <BrowserRouter >
                <div className="App">
                    <Navigation />
                    <main className="site-main">
                        <Route path="/" exact component={Home} />
                        <Route path="/all" exact component={All} />
                        <Route path="/category/:id" component={Category} />
                    </main>
                </div>
            </BrowserRouter>
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
            this.state.imagesAsElement.push(img)
        });
    }
}

export default App;
