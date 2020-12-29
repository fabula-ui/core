export const getPercentage = (partial, total) => {
    const percentage = ((partial / total) * 100);

    return {
        number: percentage,
        str: `${percentage}%`
    }
}