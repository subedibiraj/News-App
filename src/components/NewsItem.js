import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let {title, description, imageUrl ,newsUrl, publishedAt} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <img src={imageUrl?imageUrl:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/itFmngQbOCSM/v1/-1x-1.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title?title:"Chinese stock rout accelerates as foreign in"}</h5>
            <p className="card-text">{description?description:"Fall in Hong Kong and Chinese indices defies many Wall Street banks’ hopes of rebound af"}</p>
            <a href={newsUrl} target="_blank" className="btn btn-secondary">Read More</a>
            <p className="card-text"><small className="text-body-secondary">{publishedAt?new Date(publishedAt).toGMTString():"Unknown"}</small></p>
        </div>
        </div>
      </div>
    )
  }
}
