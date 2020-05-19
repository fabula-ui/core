import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import typeModifier from './modifiers/type.modifier';

const TabStyle = params => {
    const { props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tab;
    const { active, expand, stacked, type } = props;

    return `
        .fab-tab { ${componentCommons} }

        fab-tab,
        .fab-tab {
            ${expand ? `flex-grow: 1;` : ''}
            ${expand ? `flex-shrink: 0;` : ''}
        }

        .fab-tab {
            font-size: .9rem;
            font-weight: 500;
            text-align: ${stacked ? 'left' : 'center'};
        }

        .fab-tab > a,
        .fab-tab > button {
            appearance: none;
            background: none;
            border: none;
            border-bottom: solid 2px transparent;
            color: inherit;
            font-size: inherit;
            font-weight: inherit;
            padding: 1rem;
            ${stacked ? `padding-left: 0;` : ''}
            text-align: inherit;
            transition: all .2s ease-in-out;
            
            &:focus {
                outline: none;
            }
        }

        .fab-tab[data-active='true'] > a,
        .fab-tab[data-active='true'] > button {
            width: 100%;
        }

        ${colorModifier(props)}
        ${type ? typeModifier(props) : ''}
    `
}

export default TabStyle;