
export const fetchData = (key) => {
    var data = localStorage.getItem(key)
    return data
}


export const setData = (key, value) => {
    localStorage.setItem(key,JSON.stringify(value))
}