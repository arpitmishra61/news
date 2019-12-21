import React from 'react'

export default function Enews(props) {
    let news = props.news
    return (
        <li className="list-group-item list-group-item-secondary p-2 my-2">
            <h5 className='p-2'>{news.title}</h5>
            <hr />
            <div className="text-center"><img src={news.urlToImage} alt="" style={{ width: '50%' }} /><p className='mt-1 text-bold'>{news.publishedAt}</p></div>


        </li>

    )
}
