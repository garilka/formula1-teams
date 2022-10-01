import React, {useState, useEffect} from 'react';
import './BlogPost.css';
import EditTeamPage from '../../features/EditTeamPage/EditTeamPage';

const BlogPost = (props) => {
  const teamName = props.teamName;
  const worldChampionships = props.worldChampionships;
  const yearOfFoundation = props.yearOfFoundation;
  const feePaid = props.feePaid;

  const [visible, setVisible] = useState('hidden');
  const [inMemoryToken] =
  useState(JSON.parse(localStorage.getItem('token')));

  const EditTeamPageFeature =
    <EditTeamPage setRenderedComponent={props.setRenderedComponent} />;

  useEffect(() => {
    if (inMemoryToken === null) {
      setVisible('hidden');
    } else {
      setVisible('visible');
    }
  }, [inMemoryToken]);

  const handleClick= (e, goal) => {
    e.preventDefault();
    props.setRenderedComponent(goal);
  };
  console.log(visible);

  return (
    <li className='postWrapper'>
      <div className='topIcons'>
        <div className='carIcon'>🏎️</div>
        <div
          className='gearIcon'
          style={{visibility: visible}}
          onClick={(e) => handleClick(e, EditTeamPageFeature)}>
          ⚙️
        </div>
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
    </li>
  );
};

export default BlogPost;
