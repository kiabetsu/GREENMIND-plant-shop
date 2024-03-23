import { User, ShoppingCart, Menu } from 'lucide-react';

function Header() {
  return (
    <div className="header">
      <div className="left-side">
        <a className="logo" href="">
          GREENMIND
        </a>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right-side">
        <a href="">
          <ShoppingCart />
        </a>
        <a href="">
          <User />
        </a>
        <a href="" className="menu">
          <Menu />
        </a>
      </div>
    </div>
  );
}

export default Header;
