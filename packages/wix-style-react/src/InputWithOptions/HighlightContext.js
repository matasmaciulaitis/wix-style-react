import React, { createContext, useEffect, useMemo, useState } from 'react';
import useDebouncedCallback from '../providers/useDebouncedCallback';

const HighlightContext = createContext({ highlight: false, match: '' });

export const HighlightContextProvider = React.memo(
  function HighlightContextProvider({ highlight, match, children }) {
    const [debouncedMatch, setMatch] = useState(match);
    const debouncedSetMatch = useDebouncedCallback(setMatch, []);

    const contextValue = useMemo(() => ({ highlight, match: debouncedMatch }), [
      highlight,
      debouncedMatch,
    ]);

    useEffect(() => {
      if (highlight) {
        // When highlighting is enabled, update match with debouncing
        debouncedSetMatch(match);
      }
    }, [debouncedSetMatch, match, highlight]);

    return (
      <HighlightContext.Provider value={contextValue} children={children} />
    );
  },
);

export default HighlightContext;
