import React, { Component } from 'react'
import Item from './Item'



export default class Frontabr extends Component {
    state = {
        news: []
    }
    render() {
        let news = this.state.news;

        return (

            <div className="col-lg-8 ">
                <div id="carouselExampleIndicators" className="carousel slide screen" data-ride="carousel">




                    <div className="card mainScreen text-white rounded pb-3 " style={{ display: 'block !important' }}>
                        <div className="text-center bg-dark pb-2">
                            <img src={require('../../images/laptop.png')} alt="" className='rimg' />

                            <h3 className="p-1 ">Popular feeds</h3>
                        </div>
                        <div className="carousel-inner">
                            {!news.length ? (<h1 >Loading</h1>) : (
                                news.map((news, i) =>



                                    <Item news={news} key={i} id={i} />





                                )


                            )}

                        </div>





                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <i class="fas fa-chevron-circle-left fa-2x"></i>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <i class="fas fa-chevron-circle-right fa-2x "></i>
                        <span className="sr-only">Next</span>
                    </a>

                </div></div>


        )
    }
    get = async (url) => {
        const response = await fetch(url);
        return response.json();
    }



    componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fabfc618385d4dc3a501709f13000d2d`

        this.get(url).then(news => {
            console.log(news);
            this.setState({
                news: news.articles
            })



        });

    }
}
