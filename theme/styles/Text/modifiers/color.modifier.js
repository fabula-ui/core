import getBgColor from '../../../methods/color/bgColor';
import getColor from '../../../methods/color/getColor';

const colorModifier = params => {
    const { framework, props } = params;
    const { aux } = props;
    const vars = window.__FABTheme.variables.components.text;
    const colorName = getColor(props.color || vars.color, vars.colors);
    const wrapper = framework === 'angular' ? '.fab-text' : '&';

    return `
        ${wrapper} {
            color: ${props.color === 'inherit' ? 'inherit' : getBgColor(colorName, 'fill')};
        }

        ${aux && props.color === 'inherit' ?
            `${wrapper} {
                opacity: .8;
            }` : ''
        }
    `;
}

export default colorModifier;