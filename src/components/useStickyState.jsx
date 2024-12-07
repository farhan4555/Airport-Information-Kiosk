{/*The following code is from https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/*/}

import React, { useState, useEffect } from 'react';
function useStickyState(defaultValue, name) {
  const [value, setValue] = React.useState(() => {
    if (
      typeof window === 'undefined' ||
      !window.localStorage
    ) {
      return defaultValue;
    }

    const persistedValue =
      window.localStorage.getItem(name);

    return persistedValue !== null
      ? JSON.parse(persistedValue)
      : defaultValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(
      name,
      JSON.stringify(value)
    );
  }, [name, value]);

  return [value, setValue];
}

export default useStickyState;