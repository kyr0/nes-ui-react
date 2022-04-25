// creates a 1 level deep copy of an object (shallow copy) but removes the named keys from the copy
export const skipProps = (obj: any, ...keys: string[]) => {
    const copy = { ...obj };
    keys.forEach((key) => {
        delete copy[key];
    });
    return copy;
}
