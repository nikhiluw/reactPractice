import React from 'react';
//import ReactDOM from 'react-dom';
import NewsAPI from 'newsapi';
import NewsItem from "../news-item";
import '../news-item/style.css';

class NewsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            newsFeed: []
        };
        this.getNewsFeed = this.getNewsFeed.bind(this);
        this.getFirstNews = this.getFirstNews.bind(this);
        this.getOddNews = this.getOddNews.bind(this);
        this.getEvenNews = this.getEvenNews.bind(this);
        this.chunks = this.chunks.bind(this);
    }

    componentDidMount(){
        this.getNewsFeed();    
    }

    componentDidUpdate(prevProps){
        if(this.props.searchText !== prevProps.searchText){
            this.getNewsFeed(); 
        }
    }

    getNewsFeed(){
        const newsapi = new NewsAPI('f7a1f18b99a24c1e8e2cbedc4135fb5c');    
        newsapi.v2.topHeadlines({
            q:this.props.searchText,
            category:"entertainment",
            country:"in"
        }).then(response => {
            if(response.status === "ok"){
                this.setState({
                    isLoaded:true,
                    newsFeed:response.articles
                });
            }else{
                this.setState({
                    error:response.status,
                    isLoaded:true,
                    newsFeed:[]
                });
            }
            this.props.onTotResultChange(response.totalResults);
        });        
    }

    getFirstNews(index, news){
        return (
            <div className="newsList col-lg-6">
                <NewsItem key={index} news={news}/>
            </div>    
        )    
    }

    getOddNews(index, news){
        return (
            <div className="newsList col-lg-6">
                <NewsItem key={index} news={news}/>
            </div>    
        )  
    }

    getEvenNews(index, news){
        return (
            <div className="newsList col-lg-6">
                <NewsItem key={index} news={news}/>
            </div>    
        )  
    }

    chunks(arr, size) {
        if (!Array.isArray(arr)) {
          throw new TypeError('Input should be Array');
        }
      
        if (typeof size !== 'number') {
          throw new TypeError('Size should be a Number');
        }
      
        var result = [];
        for (var i = 0; i < arr.length; i += size) {
          result.push(arr.slice(i, size + i));
        }
      
        return result;
    };

    render(){
        const {error, isLoaded, newsFeed} = this.state;
        if(error){
            <div>Error: {error}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {              
            const newsFeedArray = this.chunks(newsFeed, 2);
            return (
                <div className="newsList col-lg-12">
                    {
                        newsFeedArray.map((news, index) => {
                            return (
                            <div className="row" key={index}>
                                {
                                news.map((col, index1) => {
                                        return(
                                            <div className="newsList col-lg-6" key={index+"-"+index1} >
                                                <NewsItem news={col}/>
                                            </div>
                                        )
                                    })
                                }
                            </div> 
                            )
                        })
                    }
                </div>
            ); 
        }       
            
    }
}

export default NewsList;