import React from "react";

const TicketDisplay = ({ ticketData }) => {
  return (
    <div className="ticket">
      <img src={ticketData.avatarUrl} alt="Avatar" width="100" />
      <h2>{ticketData.fullName}</h2>
      <p>{ticketData.email}</p>
    </div>
  );
};

export default TicketDisplay;