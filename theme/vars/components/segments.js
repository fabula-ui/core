import colors from '../colors';
import globals from '../globals';

const tabs = {
    ...globals,
    colors,

    // Component vars
    borderColor: 'light',
    fontSize: '.9rem',
    get inactiveFillColor() {
        return this.colors['light']
    },
}

export default tabs;