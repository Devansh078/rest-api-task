const mongoose =  require('mongoose');
const PostSchema = mongoose.Schema({
country:{
type:String,
///required:true
},
rank:{
type:Number,
//required:true
},
population:{
type:Number,
//required:true
}
});
module.exports = mongoose.model('Posts',PostSchema);