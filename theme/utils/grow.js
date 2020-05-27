const growUtils = props => {
    const { grow } = props;

    if (grow) {
        return `
            & {
                flex-grow: ${grow};
            }
        `;
    } else {
        return '';
    }
    
}

export default growUtils;