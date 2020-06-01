import getHeight from '../../methods/misc/getHeight';

// Modifiers
import colorModifier from './modifiers/color.modifier';

const CardImageStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.card;
    const { color, cover, height } = props;
    const { borderRadius } = vars;
    const wrapper = framework === 'angular' ? '.fab-card-image' : '&';

    return `
        ${wrapper} {
            ${cover ? `height: 100px;` : ''}
            ${height ? `height: ${getHeight(height)};` : ''}
            
            img {
                ${height || cover ? `height: 100%;` : 'height: auto;' }
                ${height || cover ? `object-fit: cover;` : ''}
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
    `
}

export default CardImageStyles;