import getTheme from './getTheme';

const getComponentVars = name => {
    const theme = getTheme();
    
    return {
        ...theme.variables.globals,
        ...theme.variables.components[name](theme),
        colors: {
            ...theme.variables.colors,
            ...theme.variables.components[name](theme).colors
        },
    };
}

export default getComponentVars;