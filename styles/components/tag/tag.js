import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/tag-color.modifier';
import sizeModifier from './modifiers/tag-size.modifier';

const TagStyles = params => {
    const { framework, props } = params;
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
            font-weight: ${vars.fontWeight};
            letter-spacing: ${vars.letterSpacing};
            line-height: 1;
            padding: ${vars.paddingTop} ${vars.paddingRight} ${vars.paddingBottom} ${vars.paddingLeft};
            width: 100%;

            > *:not(:last-child) {
                margin-right: .5em;
            }
        }

        .fab-tag > a,
        .fab-tag > button {
            align-items: center;
            appearance: none;
            background: none;
            border-radius: inherit;
            cursor: pointer;
            color: inherit;
            display: flex;
            font-family: inherit;
            font-size: inherit;
            font-weight: inherit;
            margin: -${vars.paddingTop} -${vars.paddingRight} -${vars.paddingBottom} -${vars.paddingLeft};
            padding: ${vars.paddingTop} ${vars.paddingRight} ${vars.paddingBottom} ${vars.paddingLeft};
            text-decoration: none;
            transition: all ${vars.transition};

            &:focus {
                outline: none;
            }

            > *:not(:last-child) {
                margin-right: .5em;
            }
        }

        .fab-tag > a:hover {
            text-decoration: none;
        }

        .fab-tag > button {
            appearance: none;
            background: none;
            border: none;

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