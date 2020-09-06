import colors from '../colors';
import globals from '../globals';

const icon = theme => ({
    ...globals,
    colors,

    get color() { return globals.textColor } 
})

export default icon;