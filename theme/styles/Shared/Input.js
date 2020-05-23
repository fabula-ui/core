const InputSharedStyles = params => {
    const { vars } = params;
    const { borderRadius, focusGlowRadius } = vars;

    return `
        position: relative;

        &:before {
            bottom: 0;
            border: solid 0;
            border-color: transparent;
            border-radius: calc(${borderRadius} + ${focusGlowRadius});
            content: '';
            display: block;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            transition: all .2s ease-in-out;
        }
    `
}

export default InputSharedStyles;