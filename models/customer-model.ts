import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please add the first name"],
  },
  last_name: {
    type: String,
    required: [true, "Please add the last name"],
  },
  address: {
    type: String,
    default: "",
  },
  company: {
    type: String,
    default: "",
  },
},
  {
    timestamps: true,
  });

const Customer = mongoose.models.Customer || mongoose.model("Customer", customerSchema);

export default Customer;