import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
function Feed() {
  return (
    <div className="feed">
    <Link to={`video/20/5555`} className='card'>
        <img src={thumbnail1} />
        <h2>how to drink water</h2>
        <h3>water splash</h3>
        <p>1 m views</p>
        </Link>
        <div className='card'>
        <img src={thumbnail2} />
        <h2>how to drink water</h2>
        <h3>water splash</h3>
        <p>1 m views</p>
        </div>
        <div className='card'>
        <img src={thumbnail3} />
        <h2>how to drink water</h2>
        <h3>water splash</h3>
        <p>1 m views</p>
        </div>
        <div className='card'>
        <img src={thumbnail4} />
        <h2>how to drink water</h2>
        <h3>water splash</h3>
        <p>1 m views</p>
        </div>
        <div className='card'>
        <img src={thumbnail5} />
        <h2>how to drink water</h2>
        <h3>water splash</h3>
        <p>1 m views</p>
        </div>
        <div className='card'>
        <img src={thumbnail6} />
        <h2>how to drink water</h2>
        <h3>water splash</h3>
        <p>1 m views</p>
        </div>
        <div className='card'>
        <img src={thumbnail7} />
        <h2>how to drink water</h2>
        <h3>water splash</h3>
        <p>1 m views</p>
        </div>
        <div className='card'>
        <img src={thumbnail8} />
        <h2>how to drink water</h2>
        <h3>water splash</h3>
        <p>1 m views</p>
        </div>
        <div className='card'>
        <img src={thumbnail1} />
        <h2>how to drink water</h2>
        <h3>water splash</h3>
        <p>1 m views</p>
        </div>
        <div className='card'>
        <img src={thumbnail2} />
        <h2>how to drink water</h2>
        <h3>water splash</h3>
        <p>1 m views</p>
        </div>
        <div className='card'>
        <img src={thumbnail3} />
        <h2>how to drink water</h2>
        <h3>water splash</h3>
        <p>1 m views</p>
        </div>
        <div className='card'>
        <img src={thumbnail4} />
        <h2>how to drink water</h2>
        <h3>water splash</h3>
        <p>1 m views</p>
        </div>
        <div className='card'>
        <img src={thumbnail5} />
        <h2>how to drink water</h2>
        <h3>water splash</h3>
        <p>1 m views</p>
        </div>
        <div className='card'>
        <img src={thumbnail6} />
        <h2>how to drink water</h2>
        <h3>water splash</h3>
        <p>1 m views</p>
        </div>
        <div className='card'>
        <img src={thumbnail7} />
        <h2>how to drink water</h2>
        <h3>water splash</h3>
        <p>1 m views</p>
        </div>
     
    </div>
  )
}

export default Feed