const gluedModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const {flow} = props;

    return `
        .fab-input-group > *:first-child:not(:only-child) {
            .fab-button,
            .fab-button:before,
            .fab-input,
            .fab-input:before,
            .fab-input input {
                ${flow === 'vertical' ? `border-bottom-left-radius: 0;` : ''}
                border-bottom-right-radius: 0;
                ${flow === 'horizontal' ? `border-top-right-radius: 0;` : ''}
            }
        }

        .fab-input-group >  *:not(:first-child):not(:last-child) {
            .fab-button,
            .fab-button:before,
            .fab-input,
            .fab-input:before,
            .fab-input input {
                border-radius: 0;
            }
        }

        .fab-input-group > *:last-child:not(:only-child) {
            .fab-button,
            .fab-button:before,
            .fab-input,
            .fab-input:before,
            .fab-input input {
                ${flow === 'horizontal' ? `border-bottom-left-radius: 0;` : ''}
                border-top-left-radius: 0;
                ${flow === 'vertical' ? `border-top-right-radius: 0;` : ''}
            }

            .fab-button:before {
                ${flow === 'horizontal' ? `border-left: none;` : ''}
            }
        }

        .fab-input-group > *:not(:last-child) {
            ${flow === 'horizontal' ? `margin-right: -1px;` : ''}
            ${flow === 'vertical' ? `margin-bottom: -1px;` : ''}
        }
    `;
}

export default gluedModifier;