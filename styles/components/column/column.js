import getGlobalVars from '../../methods/misc/getGlobalVars';
import getPercentage from '../../methods/misc/getPercentage';

const ColumnStyles = params => {
    const { props } = params;
    const { gridColumns } = getGlobalVars();

    return `
        & {
            ${props.col ? `flex-basis: ${+props.col ? getPercentage(props.col, gridColumns).str : props.col};` : ''}
            ${props.grow != null ? `flex-grow: 0;` : ''}
            flex-shrink: 0;
            padding-left: 1rem;
            padding-right: 1rem;
            ${props.col && props.width != null ? `width: ${+props.col ? getPercentage(props.col, gridColumns).str : props.col};` : ''}
        }
    `
}

export default ColumnStyles