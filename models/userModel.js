import mongoose  from "mongoose";

const Schema = mongoose.Schema
const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    role: {
        type: String,
      default: 'user'  
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    
    }
},
    {
    timestamps: true
}
);

let DataSet = mongoose.models.User || mongoose.model('User', userSchema);

export default DataSet