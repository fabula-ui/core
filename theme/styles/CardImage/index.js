import getHeight from '../../methods/misc/getHeight';

// Modifiers
import colorModifier from './modifiers/color.modifier';

const CardImageStyles = params => {
    const { props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.card;
    const { color, cover, height } = props;
    const { borderRadius } = vars;

    return `
        .fab-card-image {
            ${cover ? `height: 100px;` : ''}
            ${height ? `height: ${getHeight(height)};` : ''}
            
            img {
                ${height || cover ? `height: 100%;` : 'height: auto;' }
                ${height || cover ? `object-fit: cover;` : ''}
                width: 100%;
            }
        }

        &:first-child {
            > .fab-card-image {
                border-top-left-radius: ${borderRadius};
                border-top-right-radius: ${borderRadius};
                overflow: hidden;
            }
        }

        &:last-child {
            > .fab-card-image {
                border-bottom-left-radius: ${borderRadius};
                border-bottom-right-radius: ${borderRadius};
                overflow: hidden;
            }
        }

        ${colorModifier(props)}
    `
}

export default CardImageStyles;