import empModel from '../db/employeeSchema.js'

export async function getdata(){
    return await empModel.find({});
}

export async function postdata(data){
    let ins = await  empModel.create(data);
}

export async function deletedata(email){
    await empModel.deleteOne({email:email},(err)=>{
        if(err) throw err;
    })
}

export async function putdata(email,data){
    await empModel.updateOne({ email: email },{ $set: { email: data.email, name: data.name, phone: data.phone } }).exec((err) => {
        if (err) throw err;
    })
}
