import React, { useState } from 'react';
import { Drawer } from 'antd';
const GlobalDrawer = ({ title, children, open, onClose }) => {

  return (
    <>
      <Drawer
        title={title}
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={open}
        placement="left"
      >
        {children}
      </Drawer>
    </>
  );
};
export default GlobalDrawer;