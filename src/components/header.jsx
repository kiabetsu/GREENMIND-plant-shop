import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { User, ShoppingCart, Menu } from 'lucide-react';

function Header() {
  const [activePage, setActivePage] = React.useState(0);
  const pageList = ['Home', 'Products', 'Contacts'];

  const isMounted = React.useRef(false);
  const { items } = useSelector((state) => state.cartSlice);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className="header">
      <div className="left-side">
        <Link className="logo" to="/">
          GREENMIND
        </Link>
        <nav>
          <ul>
            {pageList.map((value, i) => (
              <li
                key={i}
                onClick={() => setActivePage(i)}
                className={i === activePage ? 'active' : ''}>
                {value === 'Home' ? (
                  <Link to="/">{value}</Link>
                ) : (
                  <Link to={value}>{value}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="right-side">
        <Link to="/cart">
          <ShoppingCart />
        </Link>
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
