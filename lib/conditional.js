// perbandingan

const equal = input =>{
    if(input == "good"){
        return "yes"
    }else{
        return "no"
    }
}

const isNumber = data =>{
    return typeof data != "number" ? false :true
}

const compare = input =>{
    let result
    let data_type = isNumber(input)

    if(data_type == true){
        if(input > 2){
            result = "success"
        }else if(input == 2){
            result = "correct"
        }else{
            result = "fail"
        }
    }else{
        result = "wrong type"
    }
    return result
}

const day = input =>{
    let result

    switch (input) {
        case 0:
            result = "sunday"   
            break;
        case 1:
            result = "monday"
            break;
        case 2:
            result = "tuesday"
            break
        case 3:
            result = "wednesday"
            break
        case 4:
            result = "thursday"
            break
        case 5:
            result = "friday"
            break
        case 6:
            result = "saturday"
            break
        default:
            result = "No day"
            break;
    }
    return result
}

module.exports = {
    equal,
    compare,
    day
}