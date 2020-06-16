// Methods
import getComponentVars from '../../methods/misc/getComponentVars';
import getHeight from '../../methods/misc/getHeight';

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
            ${props.cover ? `height: ${vars.imageHeight};` : ''}
            ${props.height ? `height: ${getHeight(props.height)};` : ''}
            position: relative;

            &:before {
                content: '';
                display: block;
                height: 50%;
                mask: url(${icon});
                mask-position: center center;
                mask-repeat: no-repeat;
                mask-size: contain;
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
                width: 100%;
            }
            
            img {
                ${props.height || props.cover ? `height: 100%;` : 'height: auto;' }
                margin: 0;
                ${props.height || props.cover ? `object-fit: cover;` : ''}
                position: relative;
                width: 100%;
            }
        }

        ${framework === 'angular' ? `&:first-child > .fab-card-image {` : ''}
        ${framework !== 'angular' ? `&:first-child {` : ''}
                border-top-left-radius: ${vars.borderRadius};
                border-top-right-radius: ${vars.borderRadius};
                overflow: hidden;
            }
        }

        ${framework === 'angular' ? `&:last-child > .fab-card-image {` : ''}
        ${framework !== 'angular' ? `&:last-child {` : ''}
                border-bottom-left-radius: ${vars.borderRadius};
                border-bottom-right-radius: ${vars.borderRadius};
                overflow: hidden;
            }
        }

        ${colorModifier(params)}
        ${TagStyles}
    `
}

export default CardImageStyles;