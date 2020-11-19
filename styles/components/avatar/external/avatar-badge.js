const BadgeExternalStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-avatar-wrapper' : '&';

    return `
        ${wrapper} .fab-badge {
            padding-left: .5em!important;
            padding-right: .5em!important;
        }

        ${wrapper} .fab-badge-wrapper[data-has-placement='false'] {
            bottom: 0;
            position: absolute;
            right: 0;
            transform: translate(25%, 25%);
            z-index: 1;
        }
    `;
}

export default BadgeExternalStyles;