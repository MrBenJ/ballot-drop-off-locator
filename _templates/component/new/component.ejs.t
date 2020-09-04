---
to: src/components/<%= name %>/<%= name %>.js
---
import React from 'react';
import cn from 'classnames';

import './<%= name %>.scss';

const <%= name %> = props => {
  const { className } = props;

  return (
    <div className={cn('<%= name %>', className)}>
      <%= name %>
    </div>
  )
}

export default <%= name %>;
