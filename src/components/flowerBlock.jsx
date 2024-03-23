import { Plus } from 'lucide-react';

function FlowerBlock() {
  return (
    <div className="flowerBlock">
      <a href="">
        <img src={'img/plants/Frame 9.png'} alt="plantPng" />
      </a>
      <a href="">
        <h4>Natural plants</h4>
      </a>
      <div className="flowerBlock__selector">
        <ul>
          <li className="active">With a pot</li>
          <li>Without a pot</li>
        </ul>
        <ul>
          <li className="active">White</li>
          <li>Grey</li>
          <li>Black</li>
        </ul>
      </div>
      <div className="flowerBlock__bottom">
        <div className="flowerBlock__price">₱ 1,400.00</div>
        <button className="button button--outline button--add">
          <Plus size={18} strokeWidth={2} />
          &nbsp; <span>Add</span>
        </button>
      </div>
    </div>
  );
}

export default FlowerBlock;
