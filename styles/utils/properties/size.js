import getNumber from '../../methods/misc/getNumber';

const sizeUtils = params => {
    const { props } = params;


    return `
        & {
            ${props.height ? `height: ${getNumber(props.height, 'px')};` : ''}
            ${props.width ? `width: ${getNumber(props.width, 'px')};` : ''}
        }
    `;
}

export default sizeUtils;