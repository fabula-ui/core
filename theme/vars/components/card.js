import colors from '../colors';
import globals from '../globals';

const card = {
    ...globals,
    colors,
    
    borderRadius: `calc(${globals.borderRadius} * 1.25)`,
    color: '#FFF',
    glowX: 0,
    glowY: '2px',
    glowRadius: '2px',
    glowSpread: 0,
    imageHeight: '120px',
    padding: '1rem'
}

export default card;