import { MoveRight } from 'lucide-react';
import FlowerBlock from '../flowerBlock';

function Sales() {
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
      <FlowerBlock />
    </div>
  );
}

export default Sales;
