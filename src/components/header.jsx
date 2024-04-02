import React from 'react';
import { User, ShoppingCart, Menu } from 'lucide-react';

function Header() {
  const [activePage, setActivePage] = React.useState(0);
  const pageList = ['Home', 'Products', 'Contacts'];

  return (
    <div className="header">
      <div className="left-side">
        <a className="logo" href="#">
          GREENMIND
        </a>
        <nav>
          <ul>
            {pageList.map((value, i) => (
              <li onClick={() => setActivePage(i)} className={i === activePage ? 'active' : ''}>
                <a href="#">{value}</a>
              </li>
            ))}
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
