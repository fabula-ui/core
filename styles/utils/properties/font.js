const fontUtils = params => {
    const { props } = params;

    if (props.font && typeof props.font === 'object') {
        return `
            & {
                ${props.font.size ? `font-size: ${props.font.size};` : ''}
                ${props.font.style ? `font-size: ${props.font.style};` : ''}
                ${props.font.weight ? `font-weight: ${props.font.weight};` : ''}
            }
        `
    } else {
        return ''
    }

    // return `
    // & {
    //     ${props.fontSize ? `font-size: ${props.fontSize};` : ''}
    //     ${props.fontStyle ? `font-size: ${props.fontStyle};` : ''}
    //     ${props.fontWeight ? `font-weight: ${props.fontWeight};` : ''}
    //     ${props.weight ? `font-weight: ${props.weight};` : ''}
    // }
    // `

}

export default fontUtils;