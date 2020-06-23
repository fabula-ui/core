// import { css } from 'emotion';

// // Variables
// import colors from './vars/colors';
// import components from './vars/components';
// import globals from './vars/globals';

// // Utils
// import alignUtils from './utils/align';
// import columnUtils from './utils/column';
// import flexUtils from './utils/flex';
// import growUtils from './utils/grow';
// import marginUtils from './utils/margin';
// import paddingUtils from './utils/padding';
// import rowUtils from './utils/row';

// // Definitions

// const DefaultTheme = {
//     variables: {
//         colors,
//         components,
//         globals,
//     }
// }

// const Utils = {
//     align: props => alignUtils(props),
//     column: props => columnUtils(props),
//     flex: props => flexUtils(props),
//     grow: props => growUtils(props),
//     margin: props => marginUtils(props),
//     padding: props => paddingUtils(props),
//     row: props => rowUtils(props)
// };

// // Methods

// const attachUtils = params => {
//     const { framework, host, utilName, props } = params;
//     let target;
//     let utils;

//     if (framework === 'angular' && host.tagName.toLowerCase().includes('fab-')) {
//         target = host.children[0];
//     } else {
//         target = host;
//     }

//     utils = Utils[utilName](props);
//     target.classList.add(css(utils));
// }

// const getComponentsVars = vars => {
//     const concatVars = {};

//     for (let componentName in vars.default) {
//         if (vars.default.hasOwnProperty(componentName)) {
//             concatVars[componentName] = { ...vars.default[componentName] }

//             for (let propertyName in concatVars[componentName]) {
//                 if (propertyName === 'colors') {
//                     concatVars[componentName]['colors'] = {
//                         ...concatVars[componentName]['colors'],
//                         ...vars.userColors
//                     }
//                 } else if (vars.user && vars.user[componentName] && vars.user[componentName][propertyName]) {
//                     concatVars[componentName][propertyName] = {
//                         ...concatVars[componentName][propertyName],
//                         ...vars.user[componentName][propertyName]
//                     }
//                 }
//             }
//         }
//     }

//     return concatVars;
// }

// const setBaseTheme = userSettings => {
//     const userVars = userSettings && userSettings.theme || {};
//     const defaultVars = DefaultTheme.variables;

//     window.__FABTheme = {
//         ...DefaultTheme,
//         variables: {
//             colors: {
//                 ...defaultVars.colors,
//                 ...userVars.colors
//             },
//             components: getComponentsVars({
//                 default: defaultVars.components,
//                 userColors: userVars.colors,
//                 userGlobals: userVars.globals,
//                 user: userVars.components,
//             }),
//             globals: {
//                 ...defaultVars.globals,
//                 ...userVars.globals
//             }
//         }
//     }
// }

// export default DefaultTheme;
// export {
//     attachUtils,
//     setBaseTheme
// };