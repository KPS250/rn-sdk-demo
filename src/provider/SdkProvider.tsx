import React, { createContext } from 'react';
import { deepMerge } from '../utils/helper';
import { Theme } from '../constants/Theme';

type SdkContextType = {
  userContext?: UserContext;
  theme?: any;
};

type UserContext = {
  mobileNumber?: string;
};

const defaultContext = {
  userContext: { mobileNumber: '' },
  theme: {},
};

const SdkContext = createContext<SdkContextType>(defaultContext);

const SdkProvider = ({ children, userContext, theme }: any) => {
  //console.log(theme ? 'Theme Passed' : 'Theme not passed');
  return (
    <SdkContext.Provider
      value={
        {
          theme: theme ? deepMerge(Theme, theme) : Theme,
          userContext: userContext,
        } as any
      }
    >
      {children}
    </SdkContext.Provider>
  );
};

export { SdkContext, SdkProvider };
