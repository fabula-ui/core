import colorModifier from "./modifiers/color.modifier";

const CardSectionStyles = params => {
    const { framework, props } = params;
    const { color, padding } = props;
    const vars = window.__FABTheme.variables.components.card;
    const { borderRadius } = vars;
    const wrapper = framework === 'angular' ? '.fab-card-section' : '&';

    return `
        ${wrapper} {
            ${padding ? `padding: 1rem;` : ''}
        }

        ${framework === 'angular' ? `&:first-child > .fab-card-section {` : ''}
        ${framework !== 'angular' ? `&:first-child {` : ''}
                border-top-left-radius: ${borderRadius};
                border-top-right-radius: ${borderRadius};
            }
        }

        ${framework === 'angular' ? `&:last-child > .fab-card-section {` : ''}
        ${framework !== 'angular' ? `&:last-child {` : ''}
                border-bottom-left-radius: ${borderRadius};
                border-bottom-right-radius: ${borderRadius};
            }
        }

        ${colorModifier(params)}
    `
}

export default CardSectionStyles;