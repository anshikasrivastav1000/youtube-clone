import React, { useState } from 'react'
import "./Home.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
function Home({sidebar}) {

  const [category,setCategory] = useState(0);
  return (
    <><div className="main">
        <div>

       
    <Sidebar sidebar ={sidebar} category={category} setCategory={setCategory}/>
    </div>
    <div className={`container ${sidebar? "" :'large-container'}`}>
        <Feed category={category}/>
    </div>
    </div>
    </>
  )
}

export default Home