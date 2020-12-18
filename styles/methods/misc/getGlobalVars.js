import getTheme from './getTheme';

export const getGlobalVars = () => {
    const theme = getTheme();
    
    return theme.variables.globals;
}