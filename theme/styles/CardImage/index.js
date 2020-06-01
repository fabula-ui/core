import componentCommons from '../../common/component.commons';

// Methods
import getHeight from '../../methods/misc/getHeight';

// Modifiers
import colorModifier from './modifiers/color.modifier';

// External Styles
import TagExternalStyles from './external/tag';

const CardImageStyles = params => {
    const { framework, props } = params;
    const vars = window.__FABTheme.variables.components.card;
    const { color, cover, height, icon } = props;
    const { borderRadius } = vars;
    const iconSvg = require(`../../../icons/${icon || 'image'}.svg`);
    const wrapper = framework === 'angular' ? '.fab-card-image' : '&';

    return `
        ${wrapper} { ${componentCommons} }
        ${wrapper} {
            ${cover ? `height: 100px;` : ''}
            ${height ? `height: ${getHeight(height)};` : ''}
            position: relative;

            &:before {
                content: '';
                display: block;
                height: 50%;
                mask: url(${iconSvg});
                mask-position: center center;
                mask-repeat: no-repeat;
                mask-size: contain;
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
                width: 100%;
            }
            
            img {
                ${height || cover ? `height: 100%;` : 'height: auto;' }
                margin: 0;
                ${height || cover ? `object-fit: cover;` : ''}
                position: relative;
                width: 100%;
            }
        }

        ${framework === 'angular' ? `&:first-child > .fab-card-image {` : ''}
        ${framework !== 'angular' ? `&:first-child {` : ''}
                border-top-left-radius: ${borderRadius};
                border-top-right-radius: ${borderRadius};
                overflow: hidden;
            }
        }

        ${framework === 'angular' ? `&:last-child > .fab-card-image {` : ''}
        ${framework !== 'angular' ? `&:last-child {` : ''}
                border-bottom-left-radius: ${borderRadius};
                border-bottom-right-radius: ${borderRadius};
                overflow: hidden;
            }
        }

        ${colorModifier(params)}
        ${TagExternalStyles()}
    `
}

export default CardImageStyles;