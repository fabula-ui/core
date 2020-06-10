import getTheme from './getTheme';

const getComponentVars = name => {
    const theme = getTheme();

    return theme.variables.components[name];
}

export default getComponentVars;