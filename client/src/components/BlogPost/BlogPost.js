import React from 'react';
import './BlogPost.css';

const BlogPost = (props) => {
  const teamName = props.teamName;
  const worldChampionships = props.worldChampionships;
  const yearOfFoundation = props.yearOfFoundation;
  const feePaid = props.feePaid;

  return (
    <div className='postWrapper'>
      <div className='topIcons'>
        <div className='carIcon'>🏎️</div>
        <div className='gearIcon'>⚙️</div>
      </div>

      <div className='teamName'>
        {teamName}
      </div>

      <div className='teamInfos'>
        <div className='worldChampionships'>
          <div className='infoLabel'>World Championships</div>
          <div className='infoContent'>🏆 {worldChampionships}</div>
        </div>
        <div className='yearOfFoundation'>
          <div className='infoLabel'>Year Of Foundation</div>
          <div className='infoContent'>{yearOfFoundation}</div>
        </div>
        <div className='feePaid'>
          <div className='infoLabel'>Entry Fee Paid</div>
          <div className='infoContent' id='feePaidInfo'>{feePaid}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
