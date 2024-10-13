import Contact from "../model/contact.model.js";

export const quereyMessage=async(req,res)=>{
    try{
        const{fullname,email,note}=req.body;
        const createdMessage=new Contact({
            fullname:fullname,
            email:email,
            note:note
        });
        await createdMessage.save()
        res.status(201).json({message:"Your Querey Sent successfully", user:{
            _id:createdMessage._id,
            fullname:createdMessage.fullname,
            email:createdMessage.email,
            note:createdMessage.note,
        },
    });

    }catch(error){
        console.log("Error: "+ error.message)
        res.status(500).json({message:"Unable to Contact"});
    }
};