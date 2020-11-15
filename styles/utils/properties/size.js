import getNumber from '../../methods/misc/getNumber';

const sizeUtils = params => {
    const { props } = params;
    const hasProperty = props.hasProperty || {};
    
    return `
        & {
            ${((props.expand === 'both' || props.expand === 'h' || props.expand === true) && !hasProperty.expand) ? `width: 100%;` : ''}
            ${(props.expand === 'both' || props.expand === 'v' && !hasProperty.expand) ? `height: 100%;` : ''}
            ${props.height ? `height: ${getNumber(props.height, 'px')};` : ''}
            ${props.maxHeight ? `max-height: ${getNumber(props.maxHeight, 'px')};` : ''}
            ${props.maxWidth ? `max-width: ${getNumber(props.maxWidth, 'px')};` : ''}
            ${props.minHeight ? `min-height: ${getNumber(props.minHeight, 'px')};` : ''}
            ${props.minWidth ? `min-width: ${getNumber(props.minWidth, 'px')};` : ''}
            ${props.width ? `width: ${getNumber(props.width, 'px')};` : ''}
        }

        & > [data-fab-component] {
            ${(props.expand === 'v' && !hasProperty.expand) ? `height: 100%;` : ''}
        }
    `;
}

export default sizeUtils;