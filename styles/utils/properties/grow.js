const growUtils = params => {
    const { props } = params;

    if (props.grow) {
        return `
            & {
                flex-grow: ${props.grow};
            }
        `;
    } else {
        return '';
    }

}

export default growUtils;