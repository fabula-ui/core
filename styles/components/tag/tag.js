import getComponentVars from '../../methods/misc/getComponentVars';
import getContext from '../../methods/misc/getContext';

// Modifiers
import colorModifier from './modifiers/tag-color.modifier';
import sizeModifier from './modifiers/tag-size.modifier';

const TagStyles = params => {
    const { framework, props } = params;
    const context = getContext(props);
    const vars = getComponentVars('tag');
    const wrapper = framework === 'angular' ? '.fab-tag-wrapper' : '&';

    return `
        ${wrapper} { display: inline-flex; }

        .fab-tag {
            align-items: center;
            border-radius: ${props.rounded ? `999px` : vars.borderRadius};
            display: flex;
            font-family: ${vars.fontFamily};
            font-size: ${vars.fontSize};
            ${!props.weight ? `font-weight: ${vars.fontWeight};` : ''}
            letter-spacing: ${vars.letterSpacing};
            line-height: 1.5;
            overflow: hidden;
            padding: ${vars.paddingTop} ${vars.paddingRight} ${vars.paddingBottom} ${vars.paddingLeft};
            width: 100%;

            > *:not(:last-child) {
                margin-right: .5em;
            }
        }

        a.fab-tag,
        button.fab-tag {
            transition: all ${vars.transition};

            &:hover {
                ${context === 'clear' ? `opacity: .8;` : ''}
            }

            &:active {
                ${context === 'clear' ? `opacity: .6;` : ''}
            }
        }

        a.fab-tag {
            text-decoration: none;
            transition: all ${vars.transition};

            &:hover {
                text-decoration: none;
            }
        }

        button.fab-tag {
            background: none;
            border: none;
            cursor: pointer;

            &:focus {
                outline: none;
            }
        }

        // Modifiers
        ${colorModifier(props)}
        ${props.size ? sizeModifier(props) : ''}
    `;
}

export default TagStyles;