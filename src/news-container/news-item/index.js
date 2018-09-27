import React from 'react';
//import styles from './style.css'
class NewsItem extends React.Component{
    
   
    render(){
        const news = this.props.news;
        return(
            
                    <div className="clearfix">
                        <div className="panel panel-default">
                            
                            <div className="panel-heading">{news.title}</div>
                            <div className="panel-body">
                                
                                <div className="newsImgBlock">
                                {news.urlToImage != null ? <img className="newsImg" src={news.urlToImage} alt=""/> : ""}
                                
                                </div>
                                <div className="newsBox clearfix">
                                <a className="newsLink" href={news.url} >{news.description}</a>    
                                <p className="content">{news.content}</p>
                                <div className="newsInfoPanel">
                                    <div style={{float:'left'}}>
                                        <p><span className="label label-primary">{news.source.name}</span> </p>
                                        <span className="glyphicon glyphicon-time" aria-hidden="true"></span> <span>{news.publishedAt}</span> 
                                    </div>
                                    <div style={{float:'right'}}>
                                    <p>- {news.author}</p>
                                    </div>
                                </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                
        );
    }
}

export default NewsItem;