import colors from '../colors';
import globals from '../globals';

const modal = {
    ...globals,
    colors,

    backdropColor: '#000',
    backdropOpacity: .5,
    color: '#FFF',
    glowX: 0,
    glowY: '2px',
    glowOpacity: .1,
    glowRadius: '2px',
    glowSpread: 0,
    sizes: {
        sm: '320px',
        md: '480px',
        lg: '640px',
        xl: '800px'
    }
}

export default modal;