const Values = require('../../models/values')

const validSortingKeys = [
    "firstval",
    "secondval",
    "sum",
    "mul",
]
function validateValInputs(getValuesInput){
    const {
        // page,
        // pagesize,
        sortby,
        order,
        // firstvalmin,
        // secondvalmin,
        // summin,
        // mulmin,
        // firstvalmax,
        // secondvalmax,
        // summax,
        // mulmax,
    } = getValuesInput;
    if(sortby && !validSortingKeys.includes(sortby)){
        throw TypeError(`${sortby} is not valid input key`)
    }
    if(order && !sortby){
        throw TypeError("sort order also needs a key")
    }
    if(order && order!=1 && order!=-1){
        throw TypeError(`order needs to be 1 or -1, got ${order}`)
    }
}

function valInputsToQuerySettings(getValuesInput){
    let {
        page,
        pagesize,
        sortby,
        order,
    } = getValuesInput;


    // set default values in case they are missing
    if(!page){
        page = 0;
    }
    if(!pagesize){
        pagesize = 5;
    }
    if(sortby & !order){
        order = 1;
    }

    var querySet = {
        skip: page*pagesize,
        limit: pagesize,
        
    }
    if(sortby){
        querySet.sort = {};
        querySet.sort[sortby] = order;
    }

    return querySet;

}

function singleFIlter(min, max){
    if(min&&max){
        return {
            $gt: min,
            $lt: max,
        }
    }
    else if(min){
        return {
            '$gt': min,
        }
    }
    else if(max){
        return {
            '$lt': max,
        }
    }
    else{
        return false;
    }
}

function valInputsToFilter(getValuesInput){
    const{
        firstvalmin,
        secondvalmin,
        summin,
        mulmin,
        firstvalmax,
        secondvalmax,
        summax,
        mulmax,
    } = getValuesInput;

    let filter = {}
    let firstvalFilter = singleFIlter(firstvalmin, firstvalmax);
    if(firstvalFilter){
        filter.firstval = firstvalFilter
    }

    let secondvalFilter = singleFIlter(secondvalmin, secondvalmax);
    if(secondvalFilter){
        filter.secondval = secondvalFilter
    }
    
    let sumFilter = singleFIlter(summin, summax);
    if(sumFilter){
        filter.sum = sumFilter
    }

    let mulFilter = singleFIlter(mulmin, mulmax);
    if(mulFilter){
        filter.sum = mulFilter
    }
    return filter;
}


module.exports = {
    Query: { 
        async getValues(_, {getValuesInput}){
            validateValInputs(getValuesInput)
            try{
                const values  = await Values.find(
                    valInputsToFilter(getValuesInput),  
                    null,
                    valInputsToQuerySettings(getValuesInput));
                return values;
            } catch(err){
                console.log(`${err.name}: ${err.message}`)
            }
        },
    }
}