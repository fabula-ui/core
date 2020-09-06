import colors from '../../variables/colors';
import components from '../../variables/components';
import globals from '../../variables/globals';

const setBaseTheme = userSettings => {
    const userVars = userSettings && userSettings.theme || {};
    const defaultTheme = {
        variables: {
            colors,
            components,
            globals,
        }
    };
    const defaultVars = defaultTheme.variables;

    window.__FABTheme = {
        ...defaultTheme,
        variables: {
            colors: {
                ...defaultVars.colors,
                ...userVars.colors
            },
            components: setComponentVars({
                default: defaultVars.components,
                userColors: userVars.colors,
                userGlobals: userVars.globals,
                user: userVars.components,
            }),
            globals: {
                ...defaultVars.globals,
                ...userVars.globals
            }
        }
    }
}

const setComponentVars = vars => {
    const concatVars = {};

    for (let componentName in vars.default) {
        if (vars.default.hasOwnProperty(componentName)) {
            const componentVars = (vars.user && vars.user[componentName]) || {};

            concatVars[componentName] = theme => ({
                ...vars.default[componentName](theme),
                colors: {
                    ...vars.default[componentName](theme).colors,
                    ...vars.userColors
                },
                ...componentVars
            })
        }
    }

    return concatVars;
}

export default setBaseTheme;