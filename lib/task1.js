const ascending_test = data =>{
    return data.sort()
}

const descending_test = data =>{
    let sorting = ascending_test(data)

    return sorting.reverse()
}

module.exports ={
    ascending_test,
    descending_test
}