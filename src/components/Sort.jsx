function Sort() {
  return (
    <div className="sort">
      <div className="sort-label">
        <b>Sort by:</b>
        <span>Popular</span>
      </div>
      <div className="sort-popup">
        <ul>
          <li>Popular</li>
          <li>Alphabet (ascending)</li>
          <li>Alphabet (descending)</li>
          <li>Price (ascending)</li>
          <li>Price (descending)</li>
        </ul>
      </div>
    </div>
  );
}

export default Sort;
