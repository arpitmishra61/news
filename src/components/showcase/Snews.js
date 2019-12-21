import React from 'react'
import { nesting } from 'postcss-selector-parser';

export default function Snews(props) {
    let news = props.news
    return (
        <div className='col-md-6 p-3 '>
            <div className="card p-2 text-danger"><h5>{news.title}</h5>
                <div>
                    <hr />
                    <img src={news.urlToImage} alt="" style={{ width: '100%' }} />

                </div></div>


        </div>
    )
}
