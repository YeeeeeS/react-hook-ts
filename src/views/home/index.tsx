import React, { useEffect, useContext, useState, useCallback } from 'react';
import { globalContext } from '@/reducer';
import { Link } from 'react-router-dom';
import CardItem from './components/cardItem';
import CountCard from './components/countCard';

import './index.scss';

const Home: React.FC<{}> = () => {

  let   [state, dispatch] = useContext(globalContext);
  const [cardNum]         = useState([1, 2, 3]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    // dispatch({ type: 'user-logout-success' });
  }, []);

  const callback = useCallback(() => {
    return count;
  }, [count]);

  return (
    <div className = "home-container">
      { cardNum && cardNum.map(
        (item: any, key: number) => 
          <CardItem
            key = {key}
          />
        )
      }
      <button
        onClick = {() => setCount(count + 1)}
      >Set Count</button>
      <CountCard callback={callback} />
      <div>
        <ul>
          <li><Link to="pageA">抛物线</Link></li>
          <li><Link to="pageB">pageB</Link></li>
          <li><Link to="pageC">pageC</Link></li>
          <li><Link to="pageD">pageD</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Home;