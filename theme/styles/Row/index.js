import componentCommons from '../../common/component.commons';

// Methods
import hasPadding from '../../methods/misc/hasPadding';

const RowStyles = params => {
    const { props } = params;

    return `
        .fab-row { ${componentCommons} }
        .fab-row {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-left: -1rem;
            margin-right: -1rem;
        }
    `;
}
export default RowStyles;