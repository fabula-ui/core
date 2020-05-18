import colorModifier from "./modifiers/color.modifier";

const CardSectionStyles = params => {
    const {props} = params;
    const {padding} = props;

    return `
        .fab-card-section {
            ${padding ? `padding: 1rem;` : ''}
        }

        ${colorModifier(props)}
    `
}

export default CardSectionStyles;