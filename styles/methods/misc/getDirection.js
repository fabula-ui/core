export const getDirection = layout => {
    const directions = {
        column: 'column',
        h: 'row',
        horizontal: 'row',
        row: 'row',
        v: 'column',
        vertical: 'column'
    };

    return directions[layout] || 'row';
}