// Methods
import getComponentVars from '../../methods/misc/getComponentVars';
import getHeight from '../../methods/misc/getHeight';
import getNumber from '../../methods/misc/getNumber';

// Modifiers
import colorModifier from './modifiers/card-color.modifier';

// External Styles
import TagStyles from './external/tag';

const CardImageStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('card');
    const wrapper = framework === 'angular' ? '.fab-card-image' : '&';

    return `
        ${wrapper} {
            display: flex;
            flex-shrink: 0;
            ${props.cover ? `height: ${vars.imageHeight};` : ''}
            ${props.height ? `height: ${getHeight(props.height)};` : ''}
            ${framework === 'angular' && !props.height && (props.layout === 'h' || props.layout === 'horizontal') ? 'height: 100%;' : ''}
            position: relative;
            width: ${props.layout === 'h' || props.layout === 'horizontal' ? '10rem' : '100%'};
            ${props.width ? `width: ${getNumber(props.width, 'px')};` : ''}
            
            img {
                ${props.height || props.cover ? `height: 100%;` : 'height: auto;'}
                margin: 0;
                ${props.height || props.cover ? `object-fit: cover;` : ''}
                position: relative;
                width: 100%;
            }
        }

        ${framework === 'angular' ? `&:first-child:not(:only-child) > .fab-card-image {` : ''}
        ${framework !== 'angular' ? `&:first-child:not(:only-child) {` : ''}
            border-bottom-left-radius: ${(props.layout === 'h' || props.layout === 'horizontal') ? vars.borderRadius : 0};
            border-top-left-radius: ${vars.borderRadius};
            border-top-right-radius: ${(props.layout === 'h' || props.layout === 'horizontal') ? 0 : vars.borderRadius};
            overflow: hidden;
        }

        ${framework === 'angular' ? `&:last-child:not(:only-child) > .fab-card-image {` : ''}
        ${framework !== 'angular' ? `&:last-child:not(:only-child) {` : ''}
            border-bottom-left-radius: ${props.layout === 'h' || props.layout === 'horizontal' ? 0 : vars.borderRadius};
            border-bottom-right-radius: ${vars.borderRadius};
            border-top-right-radius: ${props.layout === 'h' || props.layout === 'horizontal' ? vars.borderRadius : 0};
            overflow: hidden;
        }

        ${framework === 'angular' ? `&:only-child > .fab-card-image {` : ''}
        ${framework !== 'angular' ? `&:only-child {` : ''}
            border-radius: ${vars.borderRadius};
        }

        // Modifiers
        ${colorModifier(params)}

        // External
        ${wrapper} > fab-icon > .fab-icon,
        ${wrapper} > .fab-icon {
            font-size: 3rem;
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        
        ${TagStyles(params)}
    `
}

export default CardImageStyles;