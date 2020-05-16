import componentCommons from '../../common/component.commons';

// Methods
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
        flex-grow: 0;
        ${col ? `flex-basis: ${+col ? getPercentage(col, 12).str : col};`: ''}
        flex-shrink: 0;
        ${grow ? `flex-grow: ${grow};` : ''}
        ${col ? `width: ${+col ? getPercentage(col, 12).str : col};`: ''}
        ${width ? `width: ${width};` : ''}

        > .fab-column { ${componentCommons} }

        > .fab-column {
            padding-left: 1rem;
            padding-right: 1rem;
            width: 100%;
        }
    `;
}

const commonStyles = props => {
    return `

    `;
}

export default ColumnStyles;