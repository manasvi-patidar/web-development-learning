import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ ticket }) {
  return (
    <div className="Ticket">
      <p className="ticket-heading">Your Ticket</p>

      <div className="ticket-numbers">
        {ticket.map((num, idx) => (
          <TicketNum num={num} key={idx} />
        ))}
      </div>
    </div>
  );
}
