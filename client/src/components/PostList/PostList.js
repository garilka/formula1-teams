import React, {useEffect, useRef} from 'react';
import './PostList.css';
import BlogPost from '../BlogPost/BlogPost';
import usePostList from '../../hooks/usePostList';

const PostList = (props) => {
  const {handleFetch, postList} = usePostList();
  const mounted = useRef(false);
  let listItems = [];

  useEffect(() => {
    mounted.current = true;
    handleFetch();
    return () => mounted.current = false;
  }, []);

  if (postList !== []) {
    listItems = postList.map((post) => {
      const feePaidIcon = post.feePaid === true? '✔':'✘';
      return (
        <BlogPost
          setRenderedComponent={props.setRenderedComponent}
          key={post.name}
          teamName={post.name}
          worldChampionships={post.wins}
          yearOfFoundation={post.foundationYear}
          feePaid={feePaidIcon}
        />
      );
    });
  }

  if (postList !== [] && postList !== null && postList !== undefined) {
    return (
      <ul className='postListWrapper'>
        {listItems}
      </ul>
    );
  } else {
    return (
      <div className='noTeam'>Team list is empty yet...</div>
    );
  }
};

export default PostList;
