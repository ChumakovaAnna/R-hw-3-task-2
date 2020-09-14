import React from 'react';
import PropTypes from "prop-types";
import Item from "./Item";

Listing.propTypes = {
  items: PropTypes.array,
};

Listing.defaultProps = {
  items: [],
}

function Listing( { items } ) {
  return (
    <div className="item-list">
      {items.map(item => item.state === "active" && <Item item={item} key={item.listing_id}/>)}
    </div>
  );
}

export default Listing;