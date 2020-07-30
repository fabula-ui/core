const colors = {
    aux: '#E1E8ED',
    cold: '#8DCFFF',
    danger: '#FE7571',
    dark: '#525252',
    get error() {
        return this.danger
    },
    hot: '#F7993C',
    get info() {
        return this.cold
    },
    light: '#F6F8FA',
    primary: '#44B0FF',
    secondary: '#49D8D2',
    success: '#6FD367',
    warning: '#FCC549',
    white: '#FFF'
};

export default colors;