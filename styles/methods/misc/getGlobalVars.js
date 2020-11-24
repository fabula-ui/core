import getTheme from './getTheme';

const getGlobalVars = () => {
    const theme = getTheme();
    
    return theme.variables.globals;
}

export default getGlobalVars;