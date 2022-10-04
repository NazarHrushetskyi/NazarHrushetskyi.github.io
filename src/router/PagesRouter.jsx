import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routers';

function PagesRouter() {
  return (
    <div>
      <Routes>
        {routes.map((item) => (
          <Route path={item.path} element={item.component} key={item.path} />
        ))}
      </Routes>
    </div>
  );
}

export default PagesRouter;
