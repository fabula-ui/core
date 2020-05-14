import getPercentage from '../../methods/misc/getPercentage';

const ColumnStyles = params => {
    const { framework, props } = params;

    return `
        ${framework === 'angular' ? angularStyles(props) : ''}
        ${framework !== 'angular' ? commonStyles(props) : ''}
    `;
}

const angularStyles = props => {
    const { col, grow, width } = props;

    return `
        ${grow ? `flex-grow: ${grow};` : ''}
        ${col ? `width: ${+col ? getPercentage(col, 12).str : col};`: ''}
        ${width ? `width: ${width};` : ''}

        > .fab-column {
            width: 100%;
        }
    `;
}

const commonStyles = props => {
    return `

    `;
}

export default ColumnStyles;