import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema= new Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
   password: {
    type:String,
    required:[true,'password is must']
    },
    avatar:{
        type:String
    },
     coverImage:{
        type:String
     },
      watchHistory:{
        type:Schema.Types.ObjectId,
        ref:"Video"
      },
    refreshToken:{
        type:String
    }
},{
    timestamps:true
});
// pre middle ware chla dia... save hone se pehle encrypt krega
userSchema.pre("save", async function(){

    if(!this.isModified('password'))//// agar vo modified nhi h to simply return kr denge..use case me encrpt nhi
    {
        return next();
    }
    this.password= await bcrypt.hash(this.password,10);
    next();
});

// userSchema ke sath method lga dia .. custom method bna dia
userSchema.methods.isPasswordCorrect= async function(password)// ispassword hr user ke instance ke liye verify karega....
{
    const flag= await bcrypt.compare(this.password,password);
    return flag;
}



userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User= mongoose.model("User",userSchema);