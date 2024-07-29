import React from 'react';

import { MoveRight } from 'lucide-react';
import FlowerBlock from '../FlowerBlock/flowerBlock';
import Skeleton from '../FlowerBlock/flowerBlockSkeleton';

function Sales() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [flowersItems, setFlowersItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://660bbfc3ccda4cbc75dd9c98.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setFlowersItems(json);
        setIsLoading(false);
        // console.log('fsdfsdfsd ', flowersItems);
      });
  }, []);

  return (
    <div className="sales">
      <div className="seeMore">
        <h5>
          Best salling
          <br />
          plants
        </h5>
        <p>
          Easiest way to <br />
          healthy life by buying <br />
          your favorite plants
        </p>
        <button className="button">
          <span>See more</span> &nbsp;
          <MoveRight strokeWidth={1} />
        </button>
      </div>
      {isLoading
        ? [...new Array(3)].map((_, i) => <Skeleton key={i} />)
        : flowersItems
            .slice(0, 3)
            .map((obj) => <FlowerBlock key={obj.id} {...obj} />)}
    </div>
  );
}

export default Sales;
