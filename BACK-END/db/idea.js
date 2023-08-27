const mongoose =require ('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Invest");

const ideaSchema=new mongoose.Schema({
    name:String,
    useId:String,
    idea:String
});

module.exports =mongoose.model('ideas',ideaSchema);