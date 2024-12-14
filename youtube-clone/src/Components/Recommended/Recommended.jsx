import React from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
function Recommended() {
  return (
    <div className='Recommended'>
        <div className="side-video-list">
        <img src={thumbnail1} alt="Recommended video 1" />
            <div className='vid-info'>
           <h3>How to drink water</h3>
            <p>1 m views</p>
            </div>
        </div>
        <div className="side-video-list">
            <div>
            <img src={thumbnail2} alt="Recommended video 1" />
            <h3>How to drink water</h3>
            <p>1 m views</p>
            </div>
        </div>
        <div className="side-video-list">
            <div>
            <img src={thumbnail3} alt="Recommended video 1" />
            <h3>How to drink water</h3>
            <p>1 m views</p>
            </div>
        </div>
        <div className="side-video-list">
            <div>
            <img src={thumbnail4} alt="Recommended video 1" />
            <h3>How to drink water</h3>
            <p>1 m views</p>
            </div>
        </div>
        <div className="side-video-list">
            <div>
            <img src={thumbnail5} alt="Recommended video 1" />
            <h3>How to drink water</h3>
            <p>1 m views</p>
            </div>
        </div>
        <div className="side-video-list">
            <div>
            <img src={thumbnail6} alt="Recommended video 1" />
            <h3>How to drink water</h3>
            <p>1 m views</p>
            </div>
        </div>
        <div className="side-video-list">
            <div>
            <img src={thumbnail7} alt="Recommended video 1" />
            <h3>How to drink water</h3>
            <p>1 m views</p>
            </div>
        </div>
    </div>
  )
}

export default Recommended