import { useEvent, useStore } from 'effector-react';
import { useEffect } from 'react';
import {
  $inputValue,
  $list,
  homeMounted,
  inputValueChanged,
} from '../store/effector';

function Home() {
  const inputValue = useStore($inputValue);
  const list = useStore($list);
  const handleHomeMount = useEvent(homeMounted);

  useEffect(() => {
    handleHomeMount();
  }, [handleHomeMount]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputValueChanged(e.target.value);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
      <input value={inputValue} onChange={handleChange} />
    </div>
  );
}

export default Home;
