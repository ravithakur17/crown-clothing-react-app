// functional component as dont want to use lifecycle methods and no state storing required now
import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
