
export const LeadItem = ({ lead, onSelectLead }) => {

    return (
        <li>
            <input
                type="checkbox"
                onChange={() => onSelectLead(lead._id)}
            />
            <span>{lead.name} - {lead.company}</span>
        </li>
    )
}