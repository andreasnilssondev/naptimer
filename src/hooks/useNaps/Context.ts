import { createContext } from 'react';
import { ContextValues } from './types';

export const Context = createContext<ContextValues | undefined>(undefined);
