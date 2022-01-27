

const uniTotal = (string) => {
    let summ = 0;
    for(let i =0; i < string.length; i++) {
        summ += string.charCodeAt(i)
    }
    return summ
}