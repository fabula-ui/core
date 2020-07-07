// Modifiers
// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/list-color.modifier';

const ListStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('list');
    const wrapper = framework === 'angular' ? '.fab-list-wrapper' : '&';

    return `
    ${colorModifier(params)}
    `
};

export default ListStyles;