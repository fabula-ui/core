const getInitials = str => {
    const words = str.split(' ');

    if (words.length > 1) {
        return `${words[0].slice(0, 1)}${words[1].slice(0, 1)}`;
    } else if (words.length === 1) {
        return str.slice(0, 2);
    } else {
        return '';
    }
}

export default getInitials;