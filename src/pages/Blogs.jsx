import React, { useEffect, useRef, useState } from 'react'
import Title from '../components/Tittle';
import loading from '../assets/loading.gif'

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const inputRef = useRef([]);

  const searchNews = async (news) => {
    const today = new Date().toISOString().split('T')[0];

    const day = new Date();
    day.setDate(day.getDate() - 1);
    const yesterday = day.toISOString().split('T')[0];
    console.log(yesterday)

    try {
      const url = `https://newsapi.org/v2/everything?q=${news}&from=${yesterday}&to=${today}&sortBy=relevancy&apiKey=${import.meta.env.VITE_NEWS_APIKEY}`;
      const response = await fetch(url);
      const data = await response.json();

      setArticles(
        data.articles
      )      
      
    } catch (error) {
      console.error(error.message)
    }
  }

  const getElapsedTime = (publishedAt) => {
    const publishedTime = new Date(publishedAt);
    const currentTime = new Date();
    
    const elapsedSeconds = Math.floor((currentTime - publishedTime) / 1000);
  
    if (elapsedSeconds < 60) {
      return `${elapsedSeconds} seconds ago`;
    }
  
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    if (elapsedMinutes < 60) {
      return `${elapsedMinutes} minutes ago`;
    }
  
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    if (elapsedHours < 24) {
      return `${elapsedHours} hours ago`;
    }
  
    const elapsedDays = Math.floor(elapsedHours / 24);
    if (elapsedDays < 7) {
      return `${elapsedDays} days ago`;
    }
  
    return publishedTime.toISOString().split('T')[0]; // Return YYYY-MM-DD
  };
  
  useEffect(()=>{
    searchNews("education")
  },[])

  return (
    <div>
      <div className=''>
        <div className='mt-2 py-1 flex justify-center'>
        <div className='flex items-center justify-between gap-2 px-1 border border-amber-500 rounded-full'>
          <input
            className='outline-none px-3 py-0.5 text-sm'
            type="text" 
            placeholder='search...'
            ref={inputRef}
            required         
          />
          <span onClick={() => {
            const query = inputRef.current?.value.trim();

            if(!query){
              toast.error("Please enter search term", {
                position : 'top-right'
              })
              return; 
            }
            searchNews(query);

          }} className='material-symbols-outlined cursor-pointer text-amber-500'>search</span>
        </div>
        </div>
        <hr className='mt-2 text-blue-500' />
      </div>

      <div className='py-2 text-xl sm:text-3xl'>
          <Title text1='Trending' text2='News' />
      </div>
      
      { articles.length === 0 ? (
        <div className="min-h-screen flex items-center justify-center w-full">
          <img src={loading} alt="Loading..." className="w-16 h-16" />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-2 px-1">
          {articles.slice(0, 16).map((article, index) => (
            <div key={index} className="w-full max-w-sm bg-blue-50  rounded-2xl">
              <div>
                <img className="w-full h-[250px] object-cover rounded-t-2xl" src={article.urlToImage} alt="" />
              </div>

              <div className='p-2'>
                <div>
                  <div className="text-black text-sm">
                    {article.title}, {article.source.name}
                  </div>

                  <div className="my-1">
                    <a className="hover:bg-amber-500 hover:text-black text-amber-500 rounded-full px-1" href={article.url}>Read More</a>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined">schedule</span>
                    <span>{getElapsedTime(article.publishedAt)}</span>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      )}      
    </div>
  )
}

export default Blogs

