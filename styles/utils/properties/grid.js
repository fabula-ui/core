import getPercentage from '../../methods/misc/getPercentage';

const gridUtils = props => {
    if (props.row) {
        return `
            & {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                margin-left: -1rem;
                margin-right: -1rem;
            }
        `
    } else if (props.col) {
        return `
            ${props.col ? `flex-basis: ${+props.col ? getPercentage(props.col, 12).str : props.col};` : ''}
            flex-grow: 0;
            ${props.grow ? `flex-grow: ${props.grow};` : ''}
            flex-shrink: 0;
            padding-left: 1rem;
            padding-right: 1rem;
            ${props.col ? `width: ${+props.col ? getPercentage(props.col, 12).str : props.col};` : ''}
            ${props.width ? `width: ${props.width};` : ''}
        `;
    } else {
        return '';
    }
}

export default gridUtils