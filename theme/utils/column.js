import getPercentage from '../methods/misc/getPercentage';

const columnUtils = props => {
    const { col } = props;
    
    return `
        ${col ? `width: ${+col ? getPercentage(col, 12).str : col}`: ''}
    `
}

export default columnUtils;