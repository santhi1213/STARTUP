const mongoose =require ('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Invest");

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    college:String,
    university:String,
    password:String,
    Confirm_password:String
});

module.exports =mongoose.model('users',userSchema);
