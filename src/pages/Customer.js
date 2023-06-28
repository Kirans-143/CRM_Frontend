import MaterialTable from "@material-table/core";
import { useEffect, useState } from "react";
import { fetchTicket, createTicketApi, updateTicketApi } from "../api/ticket";
import Sidebar from "../component/Sidebar";
import { Button, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Customer() {
  const [ticketDetails, setTicketDetails] = useState([]);
  const [message, setMessage] = useState("");
  const [createTicketModal, setCreateTicketModal] = useState(false);
  const [priority, setPriority] = useState("");
  const [updateTicketModal, setUpdateTicketModal] = useState(false);
  const [currentSelectedTicket, setCurrentSelectedTicket] = useState({});

  const updateCurrentSelectedTicket = (data) => setCurrentSelectedTicket(data);

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

  const createTicket = (e) => {
    e.preventDefault();

    const data = {
      title: e.target.title.value,
      description: e.target.description.value,
      priority: e.target.priority.value,
    };
    console.log("Data for creating ticket is " + JSON.stringify(data));

    createTicketApi(data)
      .then((response) => {
        setCreateTicketModal(false);
        setMessage("Ticket created successfully");
        fetchTicketData();
      })
      .catch((err) => {
        setMessage(err.message);
      });
  };
  const editTicket = (ticketDetail) => {
    const ticket = {
      _id: ticketDetail._id,
      title: ticketDetail.title,
      description: ticketDetail.description,
      assignee: ticketDetail.assignee,
      reporter: ticketDetail.reporter,
      priority: ticketDetail.ticketPriority,
      status: ticketDetail.status,
    };
    setCurrentSelectedTicket(ticket);
    setUpdateTicketModal(true);
    console.log("Selecetd ticket is " + JSON.stringify(currentSelectedTicket));
  };

  const onTicketUpdate = (e) => {
    if (e.target.name === "description") {
      currentSelectedTicket.description = e.target.value;
    } else if (e.target.name === "status") {
      currentSelectedTicket.status = e.target.status;
    }
    updateCurrentSelectedTicket(Object.assign({}, currentSelectedTicket));
  };

  const updateTicket = (e) => {
    e.preventDefault();
    updateTicketApi(currentSelectedTicket._id, currentSelectedTicket)
      .then((res) => {
        setUpdateTicketModal(false);
        setMessage("Ticket Update Successfully");
        fetchTicketData();
      })
      .catch((err) => {
        setMessage(err.message);
      });
  };

  return (
    <div className="bg-light vh-100">
      <Sidebar />
      <div className="container-fluid pt-5">
        <h3 className="text-center text-success">
          Welcome, {localStorage.getItem("name")}
        </h3>
      </div>
      <p className="text-center text-muted">Take a look at all tickets below</p>

      <div className="container-fluid pt-5 p-3 ">
        <MaterialTable
          onRowClick={(event, rowData) => editTicket(rowData)}
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
              <form onSubmit={createTicket}>
                <div className="input-group m-1">
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

                <div className="input-group m-1">
                  <label className="label label-md input-group-text">
                    Description
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="description"
                    required
                  />
                </div>
                <div className="input-group m-1">
                  <label className="label label-md input-group-text">
                    Priority
                  </label>
                  <select name="priority" id="priority">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
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

        {updateTicketModal ? (
          <Modal
            show={updateTicketModal}
            centered
            onHide={() => setUpdateTicketModal(false)}
          >
            <ModalHeader>Update Ticket</ModalHeader>
            <ModalBody>
              <form onSubmit={updateTicket}>
                <h5 className="card-subtitle text-success lead">
                  ID:{currentSelectedTicket._id}
                </h5>

                <div className="inout-group m-1">
                  <label className="label label-md inpput-group-text">
                    Title
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    value={currentSelectedTicket.title}
                    disabled
                  />
                </div>

                <div className="inout-group m-1">
                  <label className="label label-md inpput-group-text">
                    Assignee
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="assignee"
                    value={currentSelectedTicket.assignee}
                    disabled
                  />
                </div>

                <div className="inout-group m-1">
                  <label className="label label-md inpput-group-text">
                    Priority
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="ticketPriority"
                    value={currentSelectedTicket.ticketPriorityriority}
                    disabled
                  />
                </div>

                <div className="inout-group m-1">
                  <label className="lable lable-md inpput-group-text">
                    Description
                  </label>
                  <textarea
                    type="text"
                    rows="3"
                    name="description"
                    value={currentSelectedTicket.description}
                    onChange={onTicketUpdate}
                  />
                </div>

                <div>
                  <label>Status</label>
                  <select
                    onChange={onTicketUpdate}
                    name="status"
                    value={currentSelectedTicket.status}
                  >
                    <option value="OPEN">OPEN</option>
                    <option value="CLOSED">CLOSED</option>
                  </select>
                </div>

                <div className="d-flex justify-content-end">
                  <Button
                    variant="secondary"
                    className="m-1"
                    onClick={() => setUpdateTicketModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button variant="success" className="m-1" type="submit">
                    Update
                  </Button>
                </div>
              </form>
            </ModalBody>
          </Modal>
        ) : null}
      </div>
    </div>
  );
}

export default Customer;
