const fontUtils = params => {
    const { props } = params;
    let css = '';

    if (props.font && typeof props.font === 'object') {
        css += `
            & {
                ${props.font.size ? `font-size: ${props.font.size};` : ''}
                ${props.font.style ? `font-size: ${props.font.style};` : ''}
                ${props.font.weight ? `font-weight: ${props.font.weight};` : ''}
            }
        `;
    }

    css += `
        & {
            ${props.weight ? `font-weight: ${props.weight};` : ''}
        }
    `;

    return css;
}

export default fontUtils;