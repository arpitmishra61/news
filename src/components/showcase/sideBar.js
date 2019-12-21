import React from 'react'
import Bitem from './Bitem';

export default class SideBar extends React.Component {
    state = {
        news: []
    }
    render() {
        let news = this.state.news;
        return (
            <div className="col-lg-4 bg-danger p-2 rounded">

                <div className="bg-dark">
                    <div className="text-center p-2 bg-dark">

                        <h4 className="text-white pb-4">Niffty</h4>




                    </div>
                    <div className="text-center">
                        <img src={require('../../images/text-lines.png')} alt="" className="rimg  rounded-circle bg-light p-2" />
                    </div>


                </div>
                <div className="listNews">
                    {!news.length ? (<h1 >Loading</h1>) : (
                        news.map((news, i) => {
                            if (i <= 4)
                                return <Bitem news={news} key={i} id={i} />
                        }





                        )


                    )}


                </div>
            </div>

        )
    }



    get = async (url) => {
        const response = await fetch(url);
        return response.json();
    }



    componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fabfc618385d4dc3a501709f13000d2d`

        this.get(url).then(news => {
            console.log(news);
            this.setState({
                news: news.articles
            })



        });

    }
}
