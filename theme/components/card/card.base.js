import { elements } from '../../common/elements';

export const base = (theme) => {
    const {
        backgroundColor
    } = theme.components.card.backgroundColor;

    return `
    .fab-card {
        background: ${backgroundColor};
        box-shadow: 0 3px 6px rgba(0, 0, 0, .1);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        font-family: ${theme.globals.fontFamily};
        position: relative;
        
        ${elements(theme, 'card', backgroundColor)}
    }
    `;
};