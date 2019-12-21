import React, { Component } from 'react'
import HNews from './hNews';
import TNews from './tNews';

export default class SecondSection extends Component {
    state = {
        tNews: [],
        hNews: []
    }
    render() {
        let hNews = this.state.hNews;
        let tNews = this.state.tNews;

        return (
            <div className='p-2'>
                <div>

                    <h4 className="p-2 bg-primary p-2 text-white">Technology</h4>
                    <div className="row">
                        {tNews.length ? (
                            tNews.map((news, i) => {
                                if (i <= 15) return <TNews key={i} news={news} />
                            })
                        ) : <h3>Loading..</h3>}</div>



                </div>
                <div className=" p-2">
                    <h4 className="p-2 bg-danger text-light text-center">Health and Life Style</h4>
                    <div className="row">
                        {hNews.length ? (
                            hNews.map((news, i) => {
                                if (i <= 9) return <HNews key={i} news={news} />
                            })
                        ) : <h3>Loading..</h3>}


                    </div>


                </div>
            </div>


        )
    }

    get = async (url) => {
        const response = await fetch(url);
        return response.json();

    }


    componentDidMount() {
        this.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=fabfc618385d4dc3a501709f13000d2d').then((tNews) => {


            this.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=fabfc618385d4dc3a501709f13000d2d').then((hNews) => this.setState({
                tNews: tNews.articles,
                hNews: hNews.articles
            }))
        })



    }
}
