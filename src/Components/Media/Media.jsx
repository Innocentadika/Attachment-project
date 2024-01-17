import React from 'react'
import Cnn from '../images/cnn-logo.png'
import Reuter from '../images/reuters.png'
import Tech from '../images/techcrunch-logo.png'
import Ted from '../images/ted-logo.png'
import Standard from '../images/thestandard-logo.png'
import Cio from '../images/cio-logo.png'
import './media.css'



const Media = () => {
  return (
    <div className='bg-black text-center py-4 m-1 lg:py-20 sm:py-20 md:py-20'>
        <h1 className='text-2
        xl font-bold'>AS SEEN ON</h1>
<div className='p-2 px-20 space-y-5 sm:flex items-center sm:space-x-4 lg:flex lg:space-x-4 md:flex md:space-x-4'>
    <div className='grow'><a href="https://edition.cnn.com/2019/12/10/business/gearbox-kenya-intl/index.html"><img  src={Cnn} alt="cnn" /></a></div>

    <div className='grow'><a href="https://www.reuters.com/video/watch/in-kenya-a-factory-aims-to-build-factori-id728240457"><img src={Reuter} alt="reuter" /></a></div>

    <div className='grow'><a href="https://techcrunch.com/2016/09/03/1379717/"><img src={Tech} alt="TechCrunch" /></a></div>

    <div className='grow'><a href="https://www.ted.com/talks/kamau_gachigi_success_stories_from_kenya_s_first_makerspace"><img src={Ted} alt="Ted" /></a></div>

    <div className='grow'><a href="https://www.standardmedia.co.ke/paywall/?source=main&content=eyJpdiI6IlZNSXUrb1hvMlJKalZrTTd5ZVhpQUE9PSIsInZhbHVlIjoiNXdtb21ZL0JrVmhGMktqWjV6WG9PZUlwU01wMEN3L3dUTHpWdDNtSEhqM0VPdFJMWXZhVG9TUERvUHBoV3RNQ1NNY3Joem5ZaWdIdkJGbXNRRXcyaTNtbnQ5LzJrcGxta0RLRS9ZWmZQd0lzQjFERTdTWmR6L0tXKzBydG93dktZWkx4R1hSNkNQYXM1U1ZZanNNcEwwWmNIVlh1OHNkTUpaRGRZR2NyMm4vV1NiSzJLVUhQMDVsYzFudG9Td21BYXQ3RFpjd3UzL2tJbjQ5cTVLZFNWQmlFWUZ0ZDQvcTFwdFFBeDI2MVpoRnBiM1lDSDZ5Nk5TTmNVbXFnN09JeFEvUEhkOEkvTHh0Q3N6M3o3ckVHeW1sb3dYOGhycFJjUG9TbXNSYzlvYkZhYjFCQzBxdEJBS2VNdnBwTXNjUDkiLCJtYWMiOiI0ODEyNDk0MzY0YzgyYjFmMzllNzM1Zjk5NTlhMGYyMjM3YWU1ZDFlODVkZDFiODMxMmVjNDFkYWRkNGYzZGMwIiwidGFnIjoiIn0="><img src={Standard} alt="Thestandard" /></a>
    </div>
    
    <div className='grow'><a href="https://www.cio.co.ke/gearbox-leading-the-country-into-the-4th-industrial-revolution/"><img src={Cio} alt="cio" /></a></div>


</div>
      
    </div>
  )
}

export default Media;
