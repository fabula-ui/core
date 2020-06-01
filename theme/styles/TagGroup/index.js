import componentCommons from "../../common/component.commons";

const TagGroupStyles = params => {
    const {framework, props} = params;
    const wrapper = framework === 'angular' ? '.fab-tag-group-wrapper' : '&';

    return `
        ${wrapper} { ${componentCommons} }

        .fab-tag-group {
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