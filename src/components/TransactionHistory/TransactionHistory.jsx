import * as React from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function TransactionHistory() {
  return (
    <Box
      sx={{
        margin: 1,
        //   position: 'absolute', zIndex: 2
      }}
    >
      <Typography variant="h6" gutterBottom component="div">
        History transactions
      </Typography>
      <TableContainer component={Paper}>
        <Table
          size="small"
          aria-label="purchases"
          sx={{ tableLayout: 'fixed' }}
        >
          <caption>
            " <b>+</b> " - прибуток, " <b>-</b> " - збиток
          </caption>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2} sx={{ width: '250px' }}>
                Рік
              </TableCell>

              <TableCell align="center" sx={{ width: '150px' }}>
                2022
              </TableCell>
              <TableCell align="center" sx={{ width: '100px' }}>
                2021
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" rowSpan={6}>
                Купівля
              </TableCell>
              <TableCell align="center">Дата</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Кількість, шт</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Загальна кількість акцій, шт</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"> Вартість, $</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Курс НБУ</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Вартість, грн</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row" rowSpan={2}>
                Комісія брокера
              </TableCell>
              <TableCell align="center">Комісія, $</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Комісія, грн</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row" rowSpan={5}>
                Продаж
              </TableCell>
              <TableCell align="center">Дата</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Кількість, шт</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"> Вартість, $</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Курс НБУ</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Вартість, грн</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row" rowSpan={2}>
                Комісія брокера
              </TableCell>
              <TableCell align="center">Комісія, $</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Комісія, грн</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row" rowSpan={5}>
                Прибуток
              </TableCell>
              <TableCell align="center">Витрати на придбання, грн</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                Комісія брокера на придбання, грн
              </TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                Комісія брокера на продаж, грн
              </TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Вартість продажу, грн</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Прибуток*, грн</TableCell>
              <TableCell align="center">2022</TableCell>
              <TableCell align="center">2021</TableCell>
            </TableRow>

            {/* {row.history.map(historyRow => (
            <TableRow key={historyRow.date}>
              <TableCell component="th" scope="row">
                {historyRow.date}
              </TableCell>
              <TableCell>{historyRow.customerId}</TableCell>
              <TableCell align="right">{historyRow.amount}</TableCell>
              <TableCell align="right">
                {Math.round(historyRow.amount * row.price * 100) / 100}
              </TableCell>
            </TableRow>
          ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TransactionHistory;
