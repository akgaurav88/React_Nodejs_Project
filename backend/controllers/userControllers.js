const fs=require('fs')

const users=JSON.parse(fs.readFileSync(`${__dirname}/../Data/users.json`))

exports.checkID=(req,res,next,val)=>{
    console.log(`user id is ${val}`)
    if(req.params.id*1 >users.length){
        return  res.status(404).json({
            status:'fail',
            message:'Invalid Id '
        })
    }
    next();
}

exports.checkBody=(req,res,next)=>{
    if(! req.body.name || ! req.body.email){
        return res.status(400).json({
            status:'fail',
            message:'Missing name and email'

        })   
    }
    next();
}

exports.getAllUsers=(req,res)=>{
    res.status(200).json({
        status:'success',
        results:users.length,
        data:{
            users
        },      
    })
}

exports.getUser=(req,res)=>{
    console.log(req.params)
    const id=req.params.id * 1;
    const user=users.find((el)=> el.id ===id);
    res.status(200).json({
        status:'success',
        data:{
            user
        },       
    });

}

exports.createUser=(req,res)=>{
    const newID=users[users.length -1].id + 1;
    const newUser=Object.assign({id: newID}, req.body)
    users.push(newUser);
    fs.writeFile(`${__dirname}/Data/users.json`,JSON.stringify(users),(err)=>{
        res.status(200).json({
            status:'success',
            data:{
                users:newUser
            }       
        })   
    })   
}

exports.updetaUser=(req,res)=>{
    console.log(req.params)
    res.status(200).json({
        status:'Success',
        data:'<data update here.....'
    })
}

exports.deleteUser=(req,res)=>{
    res.status(204).json({
        status:'Success',
        data:null,
    })
}

