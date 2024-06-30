import { ChevronUp } from "lucide-react";
import { useState } from "react";

function CollapseCard(props) {
  const [hidden, setHidden] = useState(false);
  return (
    <div className="filter--block">
      <div
        className="filter--title"
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        <span>{props.title}</span>
        {!hidden ? (
          <span className="zeroRotate">
            <ChevronUp />
          </span>
        ) : (
          <span className="rotate">
            <ChevronUp />
          </span>
        )}
      </div>
      {!hidden && <div className={"filter--content"}>{props.children}</div>}
    </div>
  );
}

export default CollapseCard;
