import React, { useEffect, useState } from 'react'

const LineUp = () => {
    
    const [news, setNews] = useState([]);
    const GearUrl = [];

    const getNews = async () => {
        await fetch(GearUrl)
        .then(response => response.json())
        .then( data => setNews(data.articles))
    }
useEffect(() => {
    getNews();
}, [])

  return (
    <div>
        <div>
            {dataLineUp.map((dataLineUp) => {
<div key={dataLineUp.id}>
    <div className='p-4'>
    <h1 className='font-bold py-4 text-center'>
        {dataLineUp.title}</h1>
        <p>By: <span className=' font-serif italic'>{dataLineUp.author} </span> </p>

        <div>

        <div className='text-white font-serif space-2-2'>

<div style={{backgroundImage: `${dataLineUp.picture}`}}>
    <h1 className='p-5 text-center text-lg'>{dataLineUp.picDescription}</h1>
</div>
<div><p> {dataLineUp.description} </p></div>

        </div>

        <div className='py-2 space-y-3'>
            <img src={dataLineUp.image} alt="image display" />
            <p> {dataLineUp.content} </p>


        </div>

        <div>
            <video className='rounded' autoPlay src={dataLineUp.video}>
                <caption> {dataLineUp.caption} </caption>
            </video>
        </div>

        </div>

    </div>
</div>
            })}
        </div>
      
    </div>
  )
}

export default LineUp;
