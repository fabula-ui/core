const TagGroupStyles = params => {
    const {framework, props} = params;
    const wrapper = framework === 'angular' ? '.fab-tag-group-wrapper' : '&';

    return `
        ${framework === 'angular' ? `& { display: block; }` : ''}    

        .fab-tag-group {
            align-items: flex-start;
            display: flex;
            flex-wrap: wrap;
            margin: -.25rem;
        }

        .fab-tag-wrapper {
            padding: .25rem;
        }
    `;
}

export default TagGroupStyles;