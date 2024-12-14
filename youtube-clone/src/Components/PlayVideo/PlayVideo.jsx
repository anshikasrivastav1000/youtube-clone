import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

function PlayVideo() {
  return (
    <div className='PlayVideo'>
    <video src={video1} controls autoPlay muted></video>
<h3>how to connect</h3>
<div className='play-video-info'>
  <p>1234 Views ; 2 days ago</p>
  <div>
<span><img src={like}/>1234</span>
<span><img src={dislike}/>1234</span>
<span><img src={share}/>1234</span>
<span><img src={save}/>1234</span>

  </div>
  </div>
  <hr/>
  <div className='publisher'>
    <img src={jack} alt='Jack' />
    <div>
    <h3>Jack Doe</h3>
    <p>1M Subscribers</p>
  

</div>
<button>Subscribe</button>
  </div>
  <div className="vid-des">
    <p>Channel that make you Laugh</p>
    <p>Hit Red Button</p>
    <hr/>
    <h4>5000 Comments</h4>
    <div className="comment">
      <img src={user_profile} alt='User' />
      <div>
        <h4>User Name <span>1 day ago</span></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id velit non velit fermentum placerat.</p>
    <div className="comment-action">
      <img src={like} alt="" />
      <span>33</span>
      <img src= {dislike} alt="" />
    </div>
    </div>
  </div>
  <div className="comment">
      <img src={user_profile} alt='User' />
      <div>
        <h4>User Name <span>1 day ago</span></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id velit non velit fermentum placerat.</p>
    <div className="comment-action">
      <img src={like} alt="" />
      <span>33</span>
      <img src= {dislike} alt="" />
    </div>
    </div>
  </div>
  <div className="comment">
      <img src={user_profile} alt='User' />
      <div>
        <h4>User Name <span>1 day ago</span></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id velit non velit fermentum placerat.</p>
    <div className="comment-action">
      <img src={like} alt="" />
      <span>33</span>
      <img src= {dislike} alt="" />
    </div>
    </div>
  </div>
  </div>
    </div>
    
  )
}

export default PlayVideo