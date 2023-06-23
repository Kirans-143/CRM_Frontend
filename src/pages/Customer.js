import MaterialTable from "@material-table/core";
import { useEffect, useState } from "react";
import { fetchTicket } from "../api/ticket";
import Sidebar from "../component/Sidebar";
import { Button, Modal } from "react-bootstrap";

function Customer() {
  const [ticketDetails, setTicketDetails] = useState([]);
  const [message, setMessage] = useState("");
  const [createTicketModal, setCreateTicketModal] = useState(false);
  const columns = [
    {
      title: "ID",
      field: "_id",
    },
    {
      title: "TITLE",
      field: "title",
    },
    {
      title: "DESCRIPTION",
      field: "description",
    },
    {
      title: "ASSIGNEE",
      field: "assignee",
    },
    {
      title: "PRIORITY",
      field: "ticketPriority",
    },
    {
      title: "STATUS",
      field: "status",
    },
  ];

  useEffect(() => {
    fetchTicketData();
  }, []);

  // Wrapping the async fetchtickets API
  async function fetchTicketData() {
    await fetchTicket()
      .then((res) => {
        setTicketDetails(res.data);
      })
      .catch((err) => {
        console.log(
          "Error occured during fetching all tickets " + JSON.stringify(err),
          setMessage(err.message)
        );
      });
  }
  return (
    <div className="bg-light vh-100">
      <Sidebar />
      <div className="container-fluid pt-5">
        <h3 className="text-center text-success">
          Welcome, {localStorage.getItem("name")}
        </h3>
      </div>
      <p className="text-center text-muted">Take a look at all tickets below</p>
      <div className="container-fluid pt-5 p-3">
        <MaterialTable
          title="Ticket raised by you"
          columns={columns}
          data={ticketDetails}
        />
        <hr />
        <p className="text-primary text-center">{message}</p>
        <h4 className="text-center "> Facing any issues ? Raise a ticket!</h4>
        <button
          className="btn btn-lg btn-success form-control"
          onClick={() => setCreateTicketModal(true)}
        >
          Raise ticket
        </button>

        {createTicketModal ? (
          <Modal
            show={createTicketModal}
            onHide={() => setCreateTicketModal(false)}
            centered
          >
            <Modal.Header closeButton>Create a new Ticket</Modal.Header>
            <Modal.Body>
              <form>
                <div className="input-group" m-1>
                  <label className="label label-md input-group-text">
                    Title
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    required
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <Button
                    onClick={() => setCreateTicketModal(false)}
                    variant="secondary"
                    className="m-1"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="success" className="m-1">
                    {" "}
                    Create
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        ) : null}
      </div>
    </div>
  );
}

export default Customer;
