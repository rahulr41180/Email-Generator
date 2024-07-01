
import mongoose from "mongoose";

const leadsSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    linkedInUrl : {
        type : String
    },
    company : {
        type : String
    }
})

export default mongoose.model("leaddata", leadsSchema);