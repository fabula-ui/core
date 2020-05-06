// export const forProp = (prop, cb) => {
//     for (const propName in prop) {
//         if (prop.hasOwnProperty(propName)) {
//             cb(propName, prop[propName]);
//         }
//     }
// }

export const elementFontSize = (theme, elementName) => {
    const sizes = theme.elements[elementName].fontSize;
    let css = '';

    for (let size in sizes) {
        css += `
        [data-fab-element='${elementName}'][data-size='${size}'] {
            font-size: ${sizes[size]};
        }
        `;
    }

    return css;
}