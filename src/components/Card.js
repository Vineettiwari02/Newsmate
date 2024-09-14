import React from 'react';
import { Link } from 'react-router-dom';
//  import noimg from "../assets/noimg.png"

export const Card = ({article}) => {
     const noimg = "https://images.pexels.com/photos/3826681/pexels-photo-3826681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
            <Link to="/">
                <img className="rounded-t-lg" src={article.urlToImage || noimg} alt="alttext" />
            </Link>
            <div className="p-5">
                <Link to="/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{article.description
                }</p>

            </div>
        </div>
    )
}
