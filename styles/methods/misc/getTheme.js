import setBaseTheme from './setBaseTheme';

const getTheme = () => {
    if (!window['__FABTheme']) { setBaseTheme(); }

    return window['__FABTheme'];
}

export default getTheme;