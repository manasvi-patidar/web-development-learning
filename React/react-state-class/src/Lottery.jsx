import { useState } from "react";
import Ticket from "./Ticket";
import { genTicket, sum } from "./helper";
import "./Lottery.css";

export default function Lottery({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div className="lottery">
      <h1 className="lottery-title">🎲 Lottery Game</h1>

      <Ticket ticket={ticket} />

      <button className="lottery-btn" onClick={buyTicket}>
        Buy New Ticket
      </button>

      <h3 className="result">{isWinning && "🎉 Congratulations, You Won!"}</h3>
    </div>
  );
}
