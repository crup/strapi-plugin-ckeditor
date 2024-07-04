// Ref: https://raw.githubusercontent.com/strapi/strapi/develop/packages/core/helper-plugin/src/features/Library.tsx

import * as React from 'react';

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

const LibraryContext = React.createContext({});

/* -------------------------------------------------------------------------------------------------
 * Provider
 * -----------------------------------------------------------------------------------------------*/

const LibraryProvider = ({ children, fields, components }) => {
    const value = React.useMemo(() => ({ fields, components }), [fields, components]);
    return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>;
};

/* -------------------------------------------------------------------------------------------------
 * Hook
 * -----------------------------------------------------------------------------------------------*/

const useLibrary = () => React.useContext(LibraryContext);

export { LibraryContext, LibraryProvider, useLibrary };
