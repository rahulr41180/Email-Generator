
import leadsModel from "../models/leads.model.js";
import { generateEmail } from "./emailGenerator.js";

const getAllLeadsDataController = async (req, res) => {
    try {
        const leadsData = await leadsModel.find({});
        // console.log('leadsData:', leadsData)

        res.status(200).send({
            status : true,
            data : leadsData
        })
    } catch(error) {

        res.status(500).send({
            status : false,
            error : error.message
        })
    }
}

const generateEmailController = async (req, res) => {
    try {
        const { leadsIds } = req.body;

        const leads = await leadsModel.find({ _id : { $in : leadsIds }});

        const emailPromises = leads.map(lead => generateEmail(lead));
        const emails = await Promise.all(emailPromises);

        res.status(200).send({
            status : true,
            data : leads,
            emails : emails
        })
    } catch(error) {
        console.log('error:', error.message);
        res.status(500).send({
            status : false,
            error : error.message
        })
    }
}

export { 
    getAllLeadsDataController,
    generateEmailController
};