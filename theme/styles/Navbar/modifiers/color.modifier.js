import getBgColor from '../../../methods/color/bgColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';

const colorModifier = params => {
    const { framework, props } = params;
    const { colors } = window.__FABTheme.variables.components.tab;
    const wrapper = framework === 'angular' ? '.fab-navbar' : '&';
    const color = getColor(props.color, colors);
    const context = getContext(props);

    return `
        ${wrapper} {
            background: ${getBgColor(color, context)};
        }
    `;
}

export default colorModifier;