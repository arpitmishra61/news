import React from 'react'

export default function Bitem(props) {
    let news = props.news
    return (
        <li className='list-group-item p-2 my-1'><h6>{news.title}</h6>
            <i class="fas fa-calendar-alt p-2   rounded-circle text-secondary bg-primary p-2 text-light"></i><span className="text-secondary">{news.publishedAt}</span>
        </li>

    )
}
