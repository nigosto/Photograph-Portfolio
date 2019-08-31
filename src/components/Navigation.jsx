import React from 'react';
import {Link} from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <div className="site-logo"><a href="/">Site Logo Goes Here</a></div>
                <nav>
                    <ul>
                        <li><a href="/all">All Images</a></li>
                        <li><a href="/category/portrait">Portraits</a></li>
                        <li><a href="/category/fashion">Fashion</a></li>
                        <li><a href="/category/nature">Nature</a></li>
                        <li><a href="/category/lifestyle">Lifestyle</a></li>
                        <li><a href="/category/black-and-white">Black & White</a></li>
                    </ul>
                </nav>
                <div className="contacts">
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation;