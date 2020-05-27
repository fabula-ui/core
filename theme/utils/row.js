const rowUtils = props => {
    const { row } = props;

    if (row) {
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
    } else {
        return '';
    }

}

export default rowUtils;