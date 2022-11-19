import { useEffect, useState } from 'react';
import { API_URL } from '../shared/constants';
import { ListItem } from '../shared/types';

function Home() {
  const [list, setList] = useState<ListItem[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setList(res));
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Home;
