import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <ul className="categories">
                    <li>
                        <div className="img-container">
                            <img src="https://images.unsplash.com/photo-1567073327537-effe8a88f452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <a href="/all" className="after"><span>All Images</span></a>
                        </div>
                    </li>
                    <li>
                        <div className="img-container">
                            <img src="https://images.unsplash.com/photo-1567103458376-0cf1f3716ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <a href="/category/portrait" className="after"><span>Portraits</span></a>
                        </div>
                    </li>
                    <li>
                        <div className="img-container">
                            <img src="https://images.unsplash.com/photo-1567124449358-b20c09f7e23e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <a href="/category/fashion" className="after"><span>Fashion</span></a>
                        </div>
                    </li>
                    <li>
                        <div className="img-container">
                            <img src="https://images.unsplash.com/photo-1567103477235-e34a3d5da8a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <a href="/category/nature" className="after"><span>Nature</span></a>
                        </div>
                    </li>
                    <li>
                        <div className="img-container">
                            <img src="https://images.unsplash.com/photo-1567149030047-d71e6ab0f68c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <a href="/category/lifestyle" className="after"><span>Lifestyle</span></a>
                        </div>
                    </li>
                    <li>
                        <div className="img-container">
                            <img src="https://images.unsplash.com/photo-1567136047741-f9ba774c74c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <a href="/category/black-and-white" className="after"><span>Black & White</span></a>
                        </div>
                    </li>

                </ul>
            </div>
        )
    }
}