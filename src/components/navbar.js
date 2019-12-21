import React from 'react'

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-danger rounded">
            <div className="row">
                <div className="col-md-2">
                    <div>

                        <img src={require("../images/text-lines.png")} alt="" className='rimg' / >
                    </div>
                    <a href="\" className="navbar-brand ">News Feed</a>


                </div>


                <div className="col-md-6 py-1">

                    <ul className=" navbar-nav ml-auto  text-center">

                        <li className="nav-item"><a href="\" className="nav-link  active">Home</a></li>
                        <li className="nav-item"><a href="\" className="nav-link">Trending News</a></li>
                        <li className="nav-item"><a href="\" className="nav-link">Cricket</a></li>
                        <li className="nav-item"><a href="\" className="nav-link">Bollywood</a></li>

                    </ul>
                </div>

                <div className="col-md-4 py-2">


                    

                </div>


            </div>


        </nav>


    )
}
