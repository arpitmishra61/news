import React from 'react'

export default function Hnews(props) {
    let news = props.news
    return (<div className="col-md-6 col-sm-6">
        <li className="list-group-item list-group-item-light p-2 my-2">
            <h5 className='p-2'>{news.title}</h5>
            <hr />
            <div className="text-center"><img src={news.urlToImage} alt="" style={{ width: '70%' }} /><p className='mt-1 text-bold'>{news.publishedAt}</p></div>


        </li></div>

    )
}
