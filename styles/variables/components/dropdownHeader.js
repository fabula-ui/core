import colors from '../colors';
import globals from '../globals';

const dropdownHeader = {
    ...globals,
    ...colors,
    
    fontWeight: 600,
    fontSize: '.8rem',
    opacity: .8,
    paddingX: '1rem',
    paddingY: '.25rem',
    get textColor() {
        return globals.auxTextColor
    }
}

export default dropdownHeader;