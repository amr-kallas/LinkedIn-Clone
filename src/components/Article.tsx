import React from "react";
import google from '/images/google.svg'
import './article.css'
import {BsThreeDots} from 'react-icons/bs'
type propsArticle = {
  articles: any;
  loading:boolean
};
const Article = (props: propsArticle) => {
    const date:any=new Date()
  console.log(props);
  return (
    <div className="article">
        
      {props && (
        <div className="article-boxes">
          {props.articles.map((article: any,index:number) => {
            return(
                <div className="box" key={index}>
                    <div className="info">
                        <div className="name">
                            <div className="image">
                                <img src={google} alt="" />
                            </div>
                            <div className="text-info">
                                <p>Amr Kallas</p>
                                <span>amr.kallas@gmail.com</span>
                                <span>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</span>
                            </div>
                        </div>
                        <i><BsThreeDots/></i>
                    </div>
                    <div className="description">
                        <p>{article.description}</p>
                    </div>
                </div>
                ) 
                
          })}
        </div>
      )}
    </div>
  );
};

export default Article;
