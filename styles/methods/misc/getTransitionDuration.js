const getTransitionDuration = el => {
    const duration = window.getComputedStyle(el).transitionDuration;

    return (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
}

export default getTransitionDuration;