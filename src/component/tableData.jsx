import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles(theme => ({
}));

const data = [
  {
    devices: '[Device1,Device2,Device3]',
    ips: '[192.168.1.1,192.168.1.1,192.168.1.1,192.168.1.1,192.168.1.1]',
    tarjetas: '',
    docs: 'a',
  },
]

export default function TablaData(props) {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell>Devices</TableCell>
            <TableCell>IPs</TableCell>
            <TableCell>Tarjetas</TableCell>
            <TableCell>Docs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(row => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.user_id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.device_id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.ip}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.credit_card}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.doc}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
