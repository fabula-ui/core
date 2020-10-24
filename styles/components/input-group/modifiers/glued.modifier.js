const gluedModifier = props => {
    const layout = props.layout === 'horizontal' || props.layout === 'h' ? 'h' : 'v';

    return `
        .fab-input-group .fab-button:focus,
        .fab-input-group .fab-input[data-focus='true'] {
            z-index: 1;
        }
    
        .fab-input-group > *:first-child:not(:only-child) {
            &,
            &:before,
            .fab-button,
            .fab-button:before,
            .fab-input,
            .fab-input:before,
            .fab-input input {
                ${layout === 'v' ? `border-bottom-left-radius: 0;` : ''}
                border-bottom-right-radius: 0;
                ${layout === 'h' ? `border-top-right-radius: 0;` : ''}
            }
        }

        .fab-input-group > *:not(:first-child):not(:last-child) {
            &,
            &:before,
            .fab-input,
            .fab-input:before,
            .fab-input input {
                border-radius: 0;
            }
        }

        .fab-input-group > *:last-child:not(:only-child) {
            &,
            &:before,
            .fab-button,
            .fab-button:before,
            .fab-input,
            .fab-input:before,
            .fab-input input {
                ${layout === 'h' ? `border-bottom-left-radius: 0;` : ''}
                border-top-left-radius: 0;
                ${layout === 'v' ? `border-top-right-radius: 0;` : ''}
            }
        }

        .fab-input-group > *:not(:last-child) {
            ${layout === 'h' ? `margin-right: -1px;` : ''}
            ${layout === 'v' ? `margin-bottom: -1px;` : ''}
        }
    `;
}

export default gluedModifier;