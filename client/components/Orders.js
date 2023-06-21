import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useLocation,useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react';
export const Orders = () => {
  let n = useNavigate();

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/order/add");
        setRows(res.data)
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
console.log(rows);

const handleDelete = async (id) => {

  try {
    await axios.delete(`http://localhost:8080/order/add/${id}`);
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className=" flex flex-col  bg-gradient-to-t from-rose-500" >
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Orders
        </Typography>
        
      </Toolbar>
    </AppBar>
  </Box>
  
  <TableContainer component={Paper} >
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell># Tracking Id</TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Date You ordered</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {loading ? (
          <TableRow>
            <TableCell colSpan={6} align="center">
              Loading...
            </TableCell>
          </TableRow>
        ) : rows.length === 0 ? (
          <TableRow>
            <TableCell colSpan={6} align="center">
              No data found.
            </TableCell>
          </TableRow>
        ) : (
          rows.map((row) => (
            <TableRow key={row.city}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right"><img src={`${row.img}`} alt="" height="50" width="50"></img></TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(row.id)}
                    >
                      Cancel Orders
                    </button>
                  </TableCell>
              
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  </TableContainer>
</div>
  );
};
