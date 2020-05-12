import globals from '../vars/globals';

const { fontFamily } = globals;

export const componentCommons = `
    box-sizing: border-box;
    font-family: ${fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    > * { 
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    `;