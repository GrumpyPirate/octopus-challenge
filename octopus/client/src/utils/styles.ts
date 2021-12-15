/**
 * @description
 * Converts pixel values to rems, using the accepted cross-browsr default of 16px.
 *
 * @param   {number} px pixel value
 * @returns {string}    rems
 */
const rem = (px: number): string => `${px / 16}rem`;

export default rem;
