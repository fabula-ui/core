const growUtils = props => {
    const { grow } = props;

    return `
        & {
        ${grow ? `flex-grow: ${grow};` : ''}
        }
    `;
}

export default growUtils;