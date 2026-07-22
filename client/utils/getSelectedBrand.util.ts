export const getSelectedBrand = (brand?: string | string[]) => {
    return Array.isArray(brand) ? brand[0] : brand;
}