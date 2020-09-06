import colors from '../colors';
import globals from '../globals';

const dropdownHeader = theme => ({
    ...globals,
    colors,
    
    fontSize: '.8rem',
    fontWeight: 600,
    opacity: .8,
    paddingX: '1rem',
    paddingY: '.25rem',
    get textColor() {
        return globals.auxTextColor
    }
})

export default dropdownHeader;