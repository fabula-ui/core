// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

const SearchInputStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('input');
    const wrapper = framework === 'angular' ? '.fab-search-input-wrapper' : '&';

    return `
        .fab-search-input {
            font-size: 1em;
            position: relative;
        }
    `
}

export default SearchInputStyles;