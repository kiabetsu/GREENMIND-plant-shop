import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={630}
    viewBox="0 0 280 630"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="15" ry="15" width="280" height="420" />
    <rect x="0" y="440" rx="12" ry="12" width="280" height="30" />
    <rect x="0" y="480" rx="12" ry="12" width="280" height="90" />
    <rect x="0" y="579" rx="12" ry="12" width="90" height="20" />
    <rect x="0" y="605" rx="12" ry="12" width="120" height="25" />
    <rect x="180" y="585" rx="25" ry="25" width="100" height="40" />
  </ContentLoader>
);

export default Skeleton;
