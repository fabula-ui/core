const fontUtils = params => {
    const { props } = params;

    return `
    & {
        ${props.fontSize ? `font-size: ${props.fontSize};` : ''}
        ${props.fontStyle ? `font-size: ${props.fontStyle};` : ''}
        ${props.fontWeight ? `font-weight: ${props.fontWeight};` : ''}
        ${props.weight ? `font-weight: ${props.weight};` : ''}
    }
    `

}

export default fontUtils;