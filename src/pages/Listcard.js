import React, { useEffect, useState } from 'react'
import { Card } from '../components'
import { useTitle } from '../hooks/useTitle';

export const Listcard = ({apipath, title}) => {
  const [articles, setArticles] = useState([]);
  const pageTitle = useTitle(title,apipath);

  const url = `https://newsapi.org/v2/top-headlines?category=${apipath}&apiKey=${process.env.REACT_APP_API_KEY}`;
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setArticles(json.articles);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchArticles();

  }, [url]);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {articles.map((article)=>(
            <Card key={index} article={article} />
          ))}


        </div>
      </section>
    </main>
  )
}
