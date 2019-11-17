export const updateObjectInArray = (items, itemId, objectPropName, newObjectProp) => {
    return items.map((u) => {
        if (u[objectPropName] === itemId) {
            return { ...u, ...newObjectProp }
        }
        return u;
    })
}