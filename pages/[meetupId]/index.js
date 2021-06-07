import { Fragment } from "react";

function MeetupDetails() {
  return (
    <Fragment>
      <img
        src="https://images.unsplash.com/photo-1558536219-f17a76e52621?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80"
        alt="A First Meetup"
      />
      <h1> A First Meetup </h1> <address> Some Street 5, Some City </address>{" "}
      <p> The meetup description. </p>{" "}
    </Fragment>
  );
}

export default MeetupDetails;
