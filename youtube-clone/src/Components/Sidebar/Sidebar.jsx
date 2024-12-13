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

function Sidebar({sidebar}) {
  return (
    <div className={`sidebar ${sidebar ? "":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <img src={home} alt="Home" />
          <span>Home</span>
        </div>
        <div className="side-link">
          <img src={game_icon} alt="Gaming" />
          <span>Gaming</span>
        </div>
        <div className="side-link">
          <img src={automobiles} alt="Automobiles" />
          <span>Automobiles</span>
        </div>
        <div className="side-link">
          <img src={sports} alt="Sports" />
          <span>Sports</span>
        </div>
        <div className="side-link">
          <img src={entertainment} alt="Entertainment" />
          <span>Entertainment</span>
        </div>
        <div className="side-link">
          <img src={tech} alt="Tech" />
          <span>Tech</span>
        </div>
        <div className="side-link">
          <img src={music} alt="Music" />
          <span>Music</span>
        </div>
        <div className="side-link">
          <img src={blog} alt="Blog" />
          <span>Blog</span>
        </div>
        <div className="side-link">
          <img src={news} alt="News" />
          <span>News</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
