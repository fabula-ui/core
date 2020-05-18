import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import typeModifier from './modifiers/type.modifier';

const TabStyle = params => {
    const { props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tab;
    const { expand, stacked, type } = props;

    return `
        .fab-tab { ${componentCommons} }

        fab-tab,
        .fab-tab {
            ${expand ? `flex-grow: 1;` : ''}
            ${expand ? `flex-shrink: 0;` : ''}
        }

        .fab-tab {
            border-bottom: solid 2px transparent;
            font-size: .9rem;
            font-weight: 500;
            ${stacked ? `padding-left: 0;` : ''}
            text-align: ${stacked ? 'left' : 'center'};
            transition: all .2s ease-in-out;
        }

        .fab-tab > a,
        .fab-tab > button {
            appearance: none;
            background: none;
            border: none;
            color: inherit;
            font-size: inherit;
            font-weight: inherit;
            padding: 1rem;
            text-align: inherit;

            &:focus {
                outline: none;
            }
        }

        ${colorModifier(props)}
        ${type ? typeModifier(props) : ''}
    `
}

export default TabStyle;