import getPercentage from '../../methods/misc/getPercentage';

const ColumnStyles = params => {
    const { framework, props } = params;
    const wrapper = framework === 'angular' ? '.fab-column' : '&';

    return `
        ${wrapper} {
            ${props.col ? `flex-basis: ${+props.col ? getPercentage(props.col, 12).str : props.col};` : ''}
            ${props.grow != null ? `flex-grow: 0;` : ''}
            flex-shrink: 0;
            padding-left: 1rem;
            padding-right: 1rem;
            ${props.col && props.width != null ? `width: ${+props.col ? getPercentage(props.col, 12).str : props.col};` : ''}
        }
    `
}

export default ColumnStyles