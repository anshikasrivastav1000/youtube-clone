import React from 'react';
import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blog from '../../assets/blogs.png';
import news from '../../assets/news.png';

function Sidebar({sidebar ,category,setCategory}) {
  return (
    <div className={`sidebar ${sidebar ? "":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category ===0?"active":""}`} onClick={()=>setCategory(0)}>
          <img src={home} alt="Home" />
          <span>Home</span>
        </div>
        <div className={`side-link ${category ===20?"active":""}`} onClick={()=>setCategory(20)}>
          <img src={game_icon} alt="Gaming" />
          <span>Gaming</span>
        </div>
        <div className={`side-link ${category ===2?"active":""}`}  onClick={()=>setCategory(2)}>
          <img src={automobiles} alt="Automobiles" />
          <span>Automobiles</span>
        </div>
        <div className={`side-link ${category ===17?"active":""}`}  onClick={()=>setCategory(17)}>
          <img src={sports} alt="Sports" />
          <span>Sports</span>
        </div>
        <div className={`side-link ${category ===24?"active":""}`}  onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="Entertainment" />
          <span>Entertainment</span>
        </div>
        <div className={`side-link ${category ===28?"active":""}`}  onClick={()=>setCategory(28)}>
          <img src={tech} alt="Tech" />
          <span>Tech</span>
        </div>
        <div className={`side-link ${category ===10?"active":""}`}  onClick={()=>setCategory(10)}>
          <img src={music} alt="Music" />
          <span>Music</span>
        </div>
        <div className={`side-link ${category ===22?"active":""}`}  onClick={()=>setCategory(22)}>
          <img src={blog} alt="Blog" />
          <span>Blog</span>
        </div>
        <div className={`side-link ${category ===25?"active":""}`} onClick={()=>setCategory(25)}>
          <img src={news} alt="News" />
          <span>News</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
