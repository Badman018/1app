export const updateObjectInArray = (items, objName, itemId, newObj) => {
    items.map(users => {
        if (users['objName'] === itemId) {
            return {...users, ...newObj}
        }
        return users
    })
}