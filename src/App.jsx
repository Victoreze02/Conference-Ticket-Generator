import React, { useState } from "react";
import TicketForm from "./components/TicketForm";
import TicketDisplay from "./components/TicketDisplay";

const App = () => {
  const [ticketData, setTicketData] = useState(null);

  return (
    <div>
      <h1>Conference Ticket Generator</h1>
      <TicketForm setTicketData={setTicketData} />
      {ticketData && <TicketDisplay ticketData={ticketData} />}
    </div>
  );
};

export default App;