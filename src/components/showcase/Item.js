import React from 'react'

export default class extends React.Component {

    render() {


        console.log('finishes..')

        let news = this.props.news
        console.log(news)
        let active = (this.props.id == 0) ? ' carousel-item active' : 'carousel-item'

        { (!news.urlToImage) ? news.urlToImage = require('../../images/noimage.gif') : news.urlToImage = news.urlToImage }
        return (
            <div className={active}>

                <div className="newsSection ">
                    <div className="row mb-3">
                        <div className='col-lg-6 p-0 bg-secondary'>


                            <img src={news.urlToImage} alt="" className="newsImg" style={{ width: "100%", borderTop: '4px solid white', borderRight: '2px solid white', borderBottom: '2px solid black', height: '263px' }} />
                        </div>
                        <div className='col-lg-6 m-0  p-0 bg-danger side'>


                            {news.title.length >= 60 ?
                                <h4 className=" text-white newsHeading   mb-1 p-3">{news.title}</h4> : <h3 className=" text-white newsHeading   mb-1 p-3">{news.title}</h3>}


                            <div className="infoExtra bg-dark">
                                <div className="row p-2">

                                    <div className="col-lg-6 p-2 pl-4">
                                        <i class="fab fa-sourcetree p-2 bg-primary rounded-circle"></i>

                                        {news.source.name}</div>
                                    <div className="col-lg-6 p-2 pr-3"><i class="fas fa-calendar-alt p-2  bg-primary rounded-circle"></i>{news.publishedAt}</div>

                                </div>

                            </div>


                        </div>
                    </div>





                </div>
                <div className="content p-3 pb-4 bg-light text-secondary m-0  card mb-3">
                    <div> {news.content}</div>
                    <div className='text-center mt-2'>
                        <a href={news.url} className='btn btn-outline-primary  p-2 btn-sm'>More</a>
                    </div>


                </div>


            </div>










        )
    }


}

