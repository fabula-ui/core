// Variables
import colors from './vars/colors';
import components from './vars/components';
import globals from './vars/globals';

// Component Styles
import AvatarStyles from './styles/Avatar';
import ButtonStyles from './styles/Button';

const DefaultTheme = {
    components: {
        avatar: props => AvatarStyles(props),
        button: props => ButtonStyles(props)
    },
    variables: {
        colors,
        components,
        globals,
    }
}

const getComponentsVars = vars => {
    const concatVars = {};

    for (let componentName in vars.default) {
        if (vars.default.hasOwnProperty(componentName)) {
            concatVars[componentName] = {
                ...vars.default[componentName],
                ...vars.user[componentName]
            }
        }
    }

    return concatVars;
}

const setBaseTheme = userSettings => {
    const userVars = userSettings && userSettings.theme || {};
    const defaultVars = DefaultTheme.variables;

    window.__FABTheme = {
        ...DefaultTheme,
        variables: {
            colors: {
                ...defaultVars.colors,
                ...userVars.colors
            },
            components: getComponentsVars({
                default: defaultVars.components,
                user: userVars.components
            }),
            globals: {
                ...defaultVars.globals,
                ...userVars.globals
            }
        }
    }
}

export default DefaultTheme;
export {
    setBaseTheme
};