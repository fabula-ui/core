// Modifiers
import colorModifier from './modifiers/color.modifier';
import sizeModifier from './modifiers/size.modifier';

const TagStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tag;
    const { anchor, button, rounded, size } = props;
    const { borderRadius, fontSize, paddingX, paddingY } = vars;
    const wrapper = framework === 'angular' ? '.fab-tag-wrapper' : '&';

    return `
        ${wrapper} {
            display: inline-flex;
        }

        .fab-tag {
            align-items: center;
            border-radius: ${rounded ? `999px;` : borderRadius}
            display: flex;
            font-size: ${fontSize};
            font-weight: 500;
            line-height: 1;
            ${!anchor && !button ? `padding: ${paddingY} ${paddingX};` : ''}
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
            border-radius: ${borderRadius};
            cursor: pointer;
            color: inherit;
            display: flex;
            font-weight: inherit;
            padding: ${paddingY} ${paddingX};
            transition: all .2s ease-in-out;

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

        ${colorModifier(props)}
        ${size ? sizeModifier(props) : ''}
    `;
}

export default TagStyles;