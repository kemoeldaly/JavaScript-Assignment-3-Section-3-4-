class ParkingGarage {
  constructor() {
    this.tickets = Array.from({ length: 10 }, (_, i) => i + 1);
    this.parkingSpaces = Array.from({ length: 10 }, (_, i) => i + 1);
    this.currentTicket = {};
  }

  takeTicket() {
    if (this.tickets.length === 0) {
      console.log("Sorry, the parking garage is full.");
      return;
    }

    if (this.parkingSpaces.length === 0) {
      console.log("All parking spaces are occupied.");
      return;
    }

    const ticketNumber = this.tickets.pop();
    const parkingSpaceNumber = this.parkingSpaces.pop();

    this.currentTicket = {
      ticketNumber,
      parkingSpaceNumber,
      paid: false,
    };

    console.log(
      `Ticket ${ticketNumber} issued. Park in space ${parkingSpaceNumber}.`
    );
  }

  payForParking() {
    if (!this.currentTicket.ticketNumber) {
      console.log("No active ticket. Please take a ticket first.");
      return;
    }

    const payment = prompt("Enter the amount to pay for parking:");

    if (payment) {
      this.currentTicket.paid = true;
      console.log("Ticket has been paid. You have 15 minutes to leave.");
    } else {
      console.log("Payment not received. Please pay for parking.");
    }
  }

  leaveGarage() {
    if (!this.currentTicket.ticketNumber) {
      console.log("No active ticket. Please take a ticket first.");
      return;
    }

    if (this.currentTicket.paid) {
      console.log("Thank you, have a nice day!");
      this.parkingSpaces.push(this.currentTicket.parkingSpaceNumber);
      this.tickets.push(this.currentTicket.ticketNumber);
      this.currentTicket = {};
    } else {
      const payment = prompt("Please pay for parking before leaving:");
      if (payment) {
        console.log("Thank you, have a nice day!");
        this.parkingSpaces.push(this.currentTicket.parkingSpaceNumber);
        this.tickets.push(this.currentTicket.ticketNumber);
        this.currentTicket = {};
      } else {
        console.log("Payment not received. Please pay for parking.");
      }
    }
  }
}

const garage = new ParkingGarage();
garage.takeTicket();
garage.payForParking();
garage.leaveGarage();
