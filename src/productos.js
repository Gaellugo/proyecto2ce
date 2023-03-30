const{Schema, model}=require('mongoose')
const product=new Schema({
    nombre:{type:String, required:true},
    edad:{type:Number, requires:true},
    identidad_secreta :{type:String, requires:true},
    poderes:{type:String, requires:true},
},{
    timestamps:true,
    versionKey:false
})

module.exports=model('productos',Schema)
