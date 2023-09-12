import * as React from 'react';
import { useState } from 'react';

// import PropTypes from 'prop-types';

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import TransactionHistory from 'components/TransactionHistory';

function createData(name, description, identifier, stock, type, total) {
  return {
    name,
    description,
    identifier,
    stock,
    type,
    total,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="center" sx={{ padding: 0 }}>
          1
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          sx={{
            width: '130px',
            borderLeft: '1px solid rgba(104, 20, 241, 0.20)',
          }}
        >
          {row.name}
        </TableCell>
        <TableCell sx={{ width: '40px', padding: 0 }} align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell
          align="center"
          sx={{ borderLeft: '1px solid rgba(104, 20, 241, 0.20)' }}
        >
          {row.description}
        </TableCell>
        <TableCell
          align="center"
          sx={{ borderLeft: '1px solid rgba(104, 20, 241, 0.20)' }}
        >
          {row.identifier}
        </TableCell>
        <TableCell
          align="center"
          sx={{ borderLeft: '1px solid rgba(104, 20, 241, 0.20)' }}
        >
          {row.stock}
        </TableCell>
        <TableCell
          align="center"
          sx={{ borderLeft: '1px solid rgba(104, 20, 241, 0.20)' }}
        >
          {row.type}
        </TableCell>
        <TableCell
          align="center"
          sx={{ borderLeft: '1px solid rgba(104, 20, 241, 0.20)' }}
        >
          {row.total}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <TransactionHistory />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

const rows = [
  createData(
    'AVDX',
    'AVIDXCHANGE HOLDINGS INC',
    'US05368X1028',
    'NASDAQ',
    'COMMON',
    2
  ),
  createData(
    'BIV',
    'VANGUARD INTERMEDIATE-TERM B ',
    'US9219378190',
    'ARCA',
    'ETF',
    6
  ),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function BrokerInformation() {
  return (
    <TableContainer component={Paper}>
      <Table
        // sx={{ tableLayout: 'fixed' }}
        size="small"
        aria-label="Broker information"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '40px' }}></TableCell>

            <TableCell
              scope="col"
              sx={{
                width: '170px',
                borderLeft: '1px solid rgba(104, 20, 241, 0.20)',
              }}
              align="center"
              colSpan={2}
            >
              Символ
            </TableCell>
            {/* <TableCell scope="col" sx={{ width: '40px', padding: 0 }} /> */}

            <TableCell
              align="center"
              scope="col"
              sx={{
                width: '300px',
                borderLeft: '1px solid rgba(104, 20, 241, 0.20)',
              }}
            >
              Опис
            </TableCell>
            <TableCell
              align="center"
              scope="col"
              sx={{
                width: '150px',
                borderLeft: '1px solid rgba(104, 20, 241, 0.20)',
              }}
            >
              Ідентифікатор
            </TableCell>
            <TableCell
              align="center"
              scope="col"
              sx={{
                width: '120px',
                borderLeft: '1px solid rgba(104, 20, 241, 0.20)',
              }}
            >
              Біржа
            </TableCell>
            <TableCell
              align="center"
              scope="col"
              sx={{
                width: '120px',
                borderLeft: '1px solid rgba(104, 20, 241, 0.20)',
              }}
            >
              Тип
            </TableCell>
            <TableCell
              align="center"
              scope="col"
              sx={{
                width: '180px',
                borderLeft: '1px solid rgba(104, 20, 241, 0.20)',
              }}
            >
              Загальна кількість акцій, шт
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
