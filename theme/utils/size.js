import getNumber from '../methods/misc/getNumber';

const sizeUtils = params => {
    const { props } = params;
    const { height, width } = props;
    return `
        & {
            ${height ? `height: ${getNumber(height, 'px')};` : ''}
            ${width ? `width: ${getNumber(width, 'px')};` : ''}
        }
    `;
}

export default sizeUtils;