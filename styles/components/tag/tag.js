import getComponentVars from '../../methods/misc/getComponentVars';
import getContext from '../../methods/misc/getContext';

// Modifiers
import colorModifier from './modifiers/tag-color.modifier';
import sizeModifier from './modifiers/tag-size.modifier';

const TagStyles = params => {
    const { framework, props } = params;
    const context = getContext(props);
    const vars = getComponentVars('tag');
    const wrapper = framework === 'angular' ? '.fab-tag' : '&';

    return `
        & { display: inline-block; }

        ${wrapper} {
            align-items: center;
            border-radius: ${props.rounded ? `999px` : vars.borderRadius};
            display: inline-block;
            font-family: ${vars.fontFamily};
            font-size: ${vars.fontSize};
            ${!props.weight ? `font-weight: ${vars.fontWeight};` : ''}
            letter-spacing: ${vars.letterSpacing};
            line-height: 1.5;
            overflow: hidden;
            padding: ${vars.paddingTop} ${vars.paddingRight} ${vars.paddingBottom} ${vars.paddingLeft};
            vertical-align: middle;

            > *:not(:last-child) {
                margin-right: .5em;
            }
        }

        a${wrapper},
        button${wrapper} {
            cursor: pointer;
            transition: all ${vars.transition};

            &:hover {
                ${context === 'clear' ? `opacity: .8;` : ''}
            }

            &:active {
                ${context === 'clear' ? `opacity: .6;` : ''}
            }
        }

        a${wrapper} {
            text-decoration: none;
            transition: all ${vars.transition};

            &:hover {
                text-decoration: none;
            }
        }

        button${wrapper} {
            appearance: none;
            background: none;
            border: none;
            cursor: pointer;

            &:focus {
                outline: none;
            }
        }

        ${wrapper} > * {
            vertical-align: middle;
        }

        // Modifiers
        ${colorModifier(params)}
        ${props.size ? sizeModifier(params) : ''}
    `;
}

export default TagStyles;