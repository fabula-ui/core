import { setBaseTheme } from '../../index';

const getTheme = () => {
    if (!window['__FABTheme']) { setBaseTheme(); }

    return window['__FABTheme'];
}

export default getTheme;