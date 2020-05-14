import gradientColor from '../../../methods/color/gradientColor';

const gradientModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const color = vars.colors[props.color];

    return `
        .fab-button {
            background: ${gradientColor(color)};
            position: relative;

            &:after {
                background: rgba(255, 255, 255, .2);
                bottom: 0;
                content: '';
                display: block;
                left: 0;
                opacity: 0;
                position: absolute;
                right: 0;
                top: 0;
                transition: all .2s ease-in-out;
                visibility: hidden;
            }

            &:hover:after {
                opacity: 1;
                visibility: visible;
            }

            &:active:after {
                background: rgba(0, 0, 0, .025);
            }
        }
    `;
}

export default gradientModifier;