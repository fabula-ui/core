import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/heading-color.modifier';


const HeadingStyles = params => {
    const { props } = params;
    const vars = getComponentVars('heading');
    const multiplier = props.size ? vars.levelMultipliers[vars.sizeRelations[props.size]] : vars.levelMultipliers[props.level];

    return `
        & {
            display: block;
            font-family: ${vars.fontFamily};
            font-size: calc(${vars.fontSize} * ${multiplier});
            font-weight: ${props.weight || vars.fontWeight};
            letter-spacing: ${vars.letterSpacing};
            margin-bottom: ${vars.marginBottom};
            margin-top: 0;
            ${props.align ? `text-align: ${props.align};` : ''}

            &:not(:first-child) {
                margin-top: ${vars.marginTop};
            }

            > .fab-heading {
                font-family: inherit;
                font-size: inherit;
                font-weight: inherit;
                margin: 0;
            }
        }

        // External
        & .fab-link:not([data-size]),
        & .fab-text:not([data-size]) {
            font-size: 1em;   
        }

        // Modifiers
        ${colorModifier(params)}
    `
}

export default HeadingStyles