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

export default setBaseTheme;