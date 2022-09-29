import {useState} from 'react';

const usePostList = () => {
  const [postList, setPostList] = useState([]);

  const handleFetch = async () => {
    fetch(process.env.REACT_APP_BACKEND_URL + '/api/team/all', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }).then(async (response) => {
      if (response.status === 200) {
        setPostList(await response.json());
      }
      if (response.status === 500) {
        throw new Error('Server error');
      }
    }).catch((error) => {
      throw new Error(error);
    });
  };

  return {
    handleFetch,
    postList,
  };
};

export default usePostList;
