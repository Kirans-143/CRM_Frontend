import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { createTicket } from "../api/ticket";

export default function createTicket({ addTicket }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ticketPriority, setTicketPriority] = useState(1);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
}

async function handleCreateTicket() {
  const body = {
    title,
    description,
    ticketPriority,
  };
  const data = await createTicket(body);
  addTicket();
  setPriority(1);
  setTitle("");
  setDescription("");
  handleClose();
}
