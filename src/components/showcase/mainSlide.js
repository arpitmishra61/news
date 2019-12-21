import React, { Component } from 'react'
import Frontabr from './Frontabr';
import SideBar from './sideBar';

export default class MainSlide extends Component {
    render() {
        return (
            <div className="newsSection my-4 py-4">




                <div className="row">

                    <Frontabr />
                    <SideBar />

                </div>

            </div>


        )
    }
}
