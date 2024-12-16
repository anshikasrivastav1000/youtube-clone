import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment';

function PlayVideo({videoId}) {
  const [apiData,setApiData] = useState(null);
  const [channelData,setChannelData] = useState(null);
  const fetchVideoData = async () =>{
    //fetching video data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then(response=>response.json().then(data => setApiData(data.items[0])));
  }

  const fetchChannelData = async () =>{
    //fetching channel data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${apiData?.snippet.channelId}&key=${API_KEY}`
    await fetch(channelData_url).then(response=>response.json().then(data => setChannelData(data.items[0])));
  }

  useEffect(()=>{
    fetchVideoData();
  },[])

  useEffect(()=>{
    fetchChannelData();
  },[apiData?.snippet.channelId])


  return (
    <div className='PlayVideo'>
    {/* <video src={video1} controls autoPlay muted></video> */}
    <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay = 1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<h3>{apiData?apiData.snippet.title : "Title Here"}</h3>
<div className='play-video-info'>
  <p>{apiData?value_converter(apiData.statistics.viewCount):"19K"} Views ; {apiData?moment(apiData.snippet.publishedAt).fromNow():""} </p>
  <div>
<span><img src={like}/>{apiData?value_converter(apiData.statistics.likeCount):"155"}</span>
<span><img src={dislike}/>1234</span>
<span><img src={share}/>1234</span>
<span><img src={save}/>1234</span>

  </div>
  </div>
  <hr/>
  <div className='publisher'>
    <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt='' />
    <div>
    <h3>{apiData?apiData.snippet.channelTitle:""}</h3>
    {/* <p>{channelData?value_converter(channelData.statistics.subscriberCount): "1M"}Subscriber</p>
   */}

</div>
<button>Subscribe</button>
  </div>
  <div className="vid-des">
    <p>{apiData?apiData.snippet.description.slice(0,250) : "description here"}</p>
    <hr/>
    <h4>{apiData?value_converter(apiData.statistics.commentCount):"105"} Comments</h4>
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