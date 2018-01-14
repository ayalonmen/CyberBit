import React from 'react';
import propTypes from 'prop-types';
import Aux from '../../hoc/Aux_';

const layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>
        {props.children}
      </main>
    </Aux>
  );
};

layout.propTypes = {
  children: propTypes.element,
};
layout.defaultProps = {
  children: propTypes.element,
};
export default layout;
