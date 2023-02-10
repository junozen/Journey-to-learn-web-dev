import { Button, ListGroup } from "react-bootstrap";

const AppointmentInfo = ({appointment, onDeleteAppointment}) => {
    return (
        <>
            <ListGroup.Item>
                <p><small>Date: {appointment.aptDate}</small></p>
                <p><strong>First Name:</strong> {appointment.firstName}</p>
                <p><strong>Last Name:</strong> {appointment.lastName}</p>
                <p><strong>Notes:</strong> {appointment.aptNotes}</p>
                <Button onClick={() => onDeleteAppointment(appointment.id)} size="sm" variant="danger">Remove</Button>
            </ListGroup.Item>
        </>
    )
}

export default AppointmentInfo;