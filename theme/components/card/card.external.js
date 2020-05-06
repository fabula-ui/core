export const avatar = theme => {
    const props = theme.components.avatar;
    
    const spacing = () => {
        let css = '';

        Object.entries(props.sizes).map(size => {
            css +=
                `
                .fab-card__body[data-has-avatar='true'][data-avatar-size='${size[0]}'] {
                    // padding-left: calc(${size[1].width} + ${theme.components.card.paddingLeft} * 1.75);
                }
                `
        });

        return css;
    };
    return `
        ${spacing()}

        .fab-card__body[data-has-avatar='true'] {
            flex-direction: row;
        }
    `;
}