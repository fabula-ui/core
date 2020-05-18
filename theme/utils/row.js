const rowUtils = props => {
    const { m, mb, ml, mr, mt, mx, my } = props;

    return `
        & {
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-left: -1rem;
            margin-right: -1rem;
        }
    `
}

export default rowUtils;