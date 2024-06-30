import React from "react";
import Filter from "./products_filter";
import Sort from "../Sort";
import FlowerBlock from "../flowerBlock";
import Skeleton from "../flowerBlockSkeleton";

function Products_page() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [flowersItems, setFlowersItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://660bbfc3ccda4cbc75dd9c98.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setFlowersItems(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="products_page">
      <div className="filter">
        <Filter />
      </div>
      <div className="products">
        <div className="content-top">
          <Sort />
        </div>
        <div className="content-items">
          {isLoading
            ? [...new Array(12)].map((_, i) => <Skeleton key={i} />)
            : flowersItems.map((obj) => <FlowerBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </div>
  );
}

export default Products_page;
