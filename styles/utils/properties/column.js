import getPercentage from '../../methods/misc/getPercentage';

const columnUtils = props => {
    const { col, grow, width } = props;

    if (col) {
        return `
            & {
                box-sizing: border-box;
                flex-grow: 0;
                ${col ? `flex-basis: ${+col ? getPercentage(col, 12).str : col};` : ''}
                flex-shrink: 0;
                ${grow ? `flex-grow: ${grow};` : ''}
                padding-left: 1rem;
                padding-right: 1rem;
                ${col ? `width: ${+col ? getPercentage(col, 12).str : col};` : ''}
                ${width ? `width: ${width};` : ''}
            }
        `
    } else {
        return '';
    }
}

export default columnUtils;