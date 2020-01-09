module.exports = data =>{
    var text = ""
    console.log(`before ${text}`)

    let loop = data.map(
        (value, index)=>(`value of ${index} is ${value}`)
        )
    console.log(`after ${text}`)

    let result = {
        loop,
        text
    }
    return result
}