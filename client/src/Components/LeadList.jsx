
import { LeadItem } from "./LeadItem";

export const LeadList = ({ leads, onSelectLead }) => {

    return (
        <ul>
            {leads.map(lead => (
                <LeadItem key={lead._id} lead={lead} onSelectLead={onSelectLead} />
            ))}
        </ul>
    )
}