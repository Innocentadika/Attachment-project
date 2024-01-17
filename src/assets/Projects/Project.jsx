import React, { useState, useEffect } from 'react';

function Projects() {
  const [count, setCount] = useState(0);
  const MAX_COUNT = 389; 

  const [count1, setCount1] = useState(0);
  const MAX_COUNT1 = 120;

  const [client, setClient] = useState(0);
  const MAX_CLIENT = 2000;

  const [year, setYear] = useState(0);
  const MAX_YEAR = 10;

  // set a maximum count limit

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count >= MAX_COUNT) {
        clearInterval(intervalId);
      } else {
        setCount(prevCount => prevCount + 1);
      }
    }, 20);

    

    return () => clearInterval(intervalId);
  }, [count, MAX_COUNT]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count1 >= MAX_COUNT1) {
        clearInterval(intervalId);
      } else {
        setCount1(prevCount => prevCount + 1);
      }
    }, 80);

    

    return () => clearInterval(intervalId);
  }, [count1, MAX_COUNT1]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (client >= MAX_CLIENT) {
        clearInterval(intervalId);
      } else {
        setClient(prevCount => prevCount + 1);
      }
    }, 5);

    

    return () => clearInterval(intervalId);
  }, [client, MAX_CLIENT]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (year >= MAX_YEAR) {
        clearInterval(intervalId);
      } else {
        setYear(prevCount => prevCount + 1);
      }
    }, 150);

    

    return () => clearInterval(intervalId);
  }, [year, MAX_YEAR]);
  

  return (
    
    <div style={{backgroundImage: `url(${require('../../Components/images/projectbg.png')})`, backgroundSize: 'cover', alignContent: 'center'}} className='  text-white font-extrabold p-5 text-lg bg-red-700 lg:py-44 sm:py-20 md:py-20 '>

<p className=' font-serif text-base sm:text-center lg:text-center md:text-center xl:text-center py-2'>HOW ABOUT SOME FUN FACTS ABOUT OUR ACADEMY</p>


<div className=' sm:flex lg:flex md:flex space-x-2 max-sm:space-x-0 max-sm:space-y-2 max-sm:pl-16 justify-between'>


<div className='border border-slate-900 w-3/4 text-center' >
<p>{year}+</p>
<h1>YEARS</h1>
</div>

<div className='border border-slate-900 w-3/4 text-center' >
<p>{count}+</p>
<h1>PROJECT DONE</h1>
</div>

<div className='border border-slate-900 w-3/4 text-center' >
<p>{client}+</p>
<h1>TRAINED & CERTIFIED</h1>
</div>

<div className='border border-slate-900 w-3/4 text-center' >
<p>{count1}+</p>
<h1>STARTUPS INCUBATED</h1>
</div>

</div>

    </div>
  );
}

export default Projects;
