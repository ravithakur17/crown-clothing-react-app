import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

/* Keep this in mind for react: whenever this component gets rendered this function call i.e. this chain of modifications to array will be called everytime as long as this component has to re render

This is going to be a PERFORMANCE CONCERN , If this array gets large or on SLower computers */

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};
export default CollectionPreview;
