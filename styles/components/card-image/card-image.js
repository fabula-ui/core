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
    const icon = require(`../../../icons/${props.icon || 'image'}.svg`);
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

            &:before {
                content: '';
                display: block;
                height: ${props.layout === 'h' || props.layout === 'horizontal' ? '50%' : '50%'};
                ${props.layout === 'h' || props.layout === 'horizontal' ? 'left: 50%;' : ''}
                mask: url(${icon});
                mask-position: center center;
                mask-repeat: no-repeat;
                mask-size: contain;
                position: absolute;
                top: 50%;
                transform: ${props.layout === 'h' || props.layout === 'horizontal' ? 'translate(-50%, -50%)' : 'translate(0, -50%)'};
                width: ${props.layout === 'h' || props.layout === 'horizontal' ? '50%' : '100%'};
            }
            
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
        ${TagStyles()}
    `
}

export default CardImageStyles;