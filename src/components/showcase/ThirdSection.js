import React, { Component } from 'react'
import Enews from './Enews';
import Snews from './Snews';
import SecondSection from './SecondSection';

export default class ThirdSection extends Component {
    state = {
        sNews: [],
        eNews: []
    }
    render() {
        let eNews = this.state.eNews;
        let sNews = this.state.sNews;

        return (
            <div>
                <div className="row">
                    <div className="col-md-4 p-2">
                        <h4 className="p-2 bg-primary p-2 text-white">Entertainment</h4>
                        {eNews.length ? (
                            eNews.map((news, i) => {
                                if (i <= 20) return <Enews key={i} news={news} />
                            })
                        ) : <h3>Loading..</h3>}



                    </div>
                    <div className="col-md-8 p-2">
                        <h4 className="p-2 bg-dark text-center text-light">Sports News</h4>
                        <div className="row">
                            {eNews.length ? (
                                sNews.map((news, i) => {
                                    if (i <= 8) return <Snews key={i} news={news} />
                                })
                            ) : <h3>Loading..</h3>}


                        </div>

                        <SecondSection />
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
        this.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=fabfc618385d4dc3a501709f13000d2d').then((eNews) => {


            this.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=fabfc618385d4dc3a501709f13000d2d').then((sNews) => this.setState({
                sNews: sNews.articles,
                eNews: eNews.articles
            }))
        })



    }
}
