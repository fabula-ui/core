import getNumber from '../../methods/misc/getNumber';

const sizeUtils = params => {
    const { props } = params;
    const hasProperty = props.hasProperty || {};
    
    return `
        & {
            ${(props.expand && !hasProperty.expand) ? `width: 100%;` : ''}
            ${props.height ? `height: ${getNumber(props.height, 'px')};` : ''}
            ${props.maxHeight ? `max-height: ${getNumber(props.maxHeight, 'px')};` : ''}
            ${props.maxWidth ? `min-width: ${getNumber(props.maxWidth, 'px')};` : ''}
            ${props.minHeight ? `min-height: ${getNumber(props.minHeight, 'px')};` : ''}
            ${props.minWidth ? `min-width: ${getNumber(props.minWidth, 'px')};` : ''}
            ${props.width ? `width: ${getNumber(props.width, 'px')};` : ''}
        }
    `;
}

export default sizeUtils;