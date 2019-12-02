const Values = require('../../models/values')

module.exports = {
    Mutation: { 
        postValues(_, {valuesInput}, {pubsub}){
            // at this point the values should be varified because they are mandatory
            // and must be Floats
            const {firstval, secondval} = valuesInput;
            
            try{
                Values.create({
                    firstval, 
                    secondval,
                    sum: firstval+secondval,
                    mul: firstval*secondval,
                }, (err, res) =>{
                    if(!err){
                        pubsub.publish("VALUESUPDATE", {id: res.id})
                    }
                    return { postValues: !err } 
                });
            } catch(err){
                console.log(`${err.name}: ${err.message}`)
            }
        },
        deleteValues(_, {valuesInput}, {pubsub}){
            // at this point the values should be varified because they are mandatory
            // and must be Floats
            const {id} = valuesInput;
            try{
                Values.findByIdAndDelete(id, (err, res) =>{
                    if(!err){
                        pubsub.publish("VALUESUPDATE", {id: id})
                    }
                    return { postValues: !err } 
                });
            } catch(err){
                console.log(`${err.name}: ${err.message}`)
            }
        },
        editValues(_, {valuesInput}, {pubsub}){
            // at this point the values should be varified because they are mandatory
            // and must be Floats
            const {id, firstval, secondval} = valuesInput;
            try{
                Values.findByIdAndUpdate(id, {
                    firstval, 
                    secondval,
                    sum: firstval+secondval,
                    mul: firstval*secondval,
                }, (err, res) =>{
                    if(!err){
                        pubsub.publish("VALUESUPDATE", {id: id})
                    }
                    return { postValues: !err } 
                });
            } catch(err){
                console.log(`${err.name}: ${err.message}`)
            }
        },
    }
}