import getActiveColor from '../../../methods/color/activeColor';
import getBgColor from '../../../methods/color/bgColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/textColor';
import getHoverColor from '../../../methods/color/hoverColor';
import getHoverTextColor from '../../../methods/color/hoverTextColor';

const blockType = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tab;
    const {stacked} = props;

    return `
        .fab-tab {
            > a,
            > button {
                border-bottom: none;
                ${stacked ? `padding-left: 1rem;` : ''}
                ${stacked ? `padding-right: 1rem;` : ''}
            }
        }
    `;
}

const floatType = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tab;
    const { stacked } = props;

    return `
    .fab-tab { 
        > a,
        > button {
            border-bottom: none;
            border-radius: .5rem;
            padding: .3rem 1rem;
        }
    }
    `;
}

const pillType = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tab;

    return `
    .fab-tab { 
        > a,
        > button {
            border-bottom: none;
            border-radius: 2rem;
            padding: .3rem 1rem;
        }
    }
    `;
}

const typeModifier = props => {
    const { stacked, type } = props;
    return `
        ${type === 'block' ? blockType(props) : ''}
        ${type === 'float' ? floatType(props) : ''}
        ${type === 'pill' ? pillType(props) : ''}

        .fab-tab {
            ${stacked && (type === 'float' || type === 'pill') ? `padding: .25rem 0;` : ''}
        }
    `;
}

export default typeModifier;