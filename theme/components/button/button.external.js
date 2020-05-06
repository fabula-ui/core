export const ButtonExternal = () => {
    return `
    .fab-button {
        // line-height: 1;
    }
        .fab-button .fab-badge {
            font-size: .75em;
            padding-left: .5em;
            padding-right: .5em;
            top: -1px;
        }
        
        .fab-button .fab-badge:not([data-color]) {
            background-color: #FFF;
        }
    `;
}