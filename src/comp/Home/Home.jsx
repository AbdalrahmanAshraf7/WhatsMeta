import React, { useEffect, useState } from 'react'
import Header from "../Header/Header.jsx"
import Services from '../Services/Services.jsx'
import Comments from '../Comments/Comments.jsx'
import Partners from '../Partners/Partners.jsx';









export default function Home() {



   const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);







  return<>
  <Header></Header>
  <Services></Services>
  <Partners></Partners>
  <Comments></Comments>

  




    








  

 
  </>
}
