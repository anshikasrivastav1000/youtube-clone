import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'

import { API_KEY, value_converter ,commentData} from '../../data'
import moment from 'moment';

function PlayVideo({videoId}) {
  const [apiData,setApiData] = useState(null);
  const [channelData,setChannelData] = useState(null);
  // const [commentData,setCommentData] = useState([]);
  const fetchVideoData = async () =>{
    //fetching video data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then(response=>response.json().then(data => setApiData(data.items[0])));
  }

  const fetchChannelData = async () =>{
    //fetching channel data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${apiData?.snippet.channelId}&key=${API_KEY}`
    await fetch(channelData_url).then(response=>response.json().then(data => setChannelData(data.items[0])));

    //fetching other data
    // const comment_url =`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}_VB39Jo8mAQ&key=${API_KEY}`
    // await fetch(comment_url).then(response=>response.json().then(data => setCommentData(data.items)));

    // //fetching related videos
    // const related_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${API_KEY}`
    // await fetch(related_url).then(response=>response.json().then(data => setRelatedVideos(data.items)));

    // //fetching playlist items
    // const playlist_url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${apiData?.contentDetails.relatedPlaylists.watchLater}&maxResults=5&key=${API_KEY}`
    // await fetch(playlist_url).then(response=>response.json().then(data => setPlaylistItems(data.items)));

  }

  useEffect(()=>{
    fetchVideoData();
  },[])

  useEffect(()=>{
    fetchChannelData();
  },[apiData])


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
    {/* <p>{channelData?channelData.statistics.subscriberCount: "1M"}Subscriber</p> */}
  

</div>
<button>Subscribe</button>
  </div>
  <div className="vid-des">
    <p>{apiData?apiData.snippet.description.slice(0,250) : "description here"}</p>
    <hr/>
    <h4>{apiData?value_converter(apiData.statistics.commentCount):"105"} Comments</h4>

    {commentData.map((item,index)=>{
      return(
        <div key={index} className="comment">
        {/* <img src={item.snippet.toLevelComment.snippet.authorProfileImageUrl} alt='User' /> */}
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
    
      )
    })}
  
  </div>
    </div>
    
  )
}

export default PlayVideo