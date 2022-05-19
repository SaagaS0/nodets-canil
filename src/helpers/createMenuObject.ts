type MenuOptions = '' | 'all' | 'dogs' | 'cat' | 'fish'

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dogs: false,
        cat: false,
        fish: false
    }

    if(activeMenu !== '') {
        returnObject[activeMenu] = true
    }
    return returnObject
}