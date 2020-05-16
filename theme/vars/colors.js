import Color from 'color';

const colors = {
    aux: '#999DA1',
    cold: '#8DCFFF',
    danger: '#FE7571',
    dark: '#525252',
    get error() {
        return this.danger
    },
    hot: '#F7993C',
    light: '#F6F8FA',
    get placeholderImageColor() {
        return Color(this.light).darken(.05)
    },
    primary: '#44B0FF',
    secondary: '#49D8D2',
    success: '#6FD367',
    warning: '#FCC549',
    white: '#FFF'
};

export default colors;