import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function ShowSearchItem(item, searchText, isActiveSearch) {
  if (!isActiveSearch) {
    return item;
  }
  if (item === searchText) {
    return item;
  }
}

export default function TodoBauyersList(props) {
  const classes = useStyles();
  const ShowTable = () => {
    if (props.numberShow != '' && props.pagination === '') {
      return (
        props.items.slice(0, props.numberShow).map((item) => (
          <TableRow key={item.id}>
            <TableCell align="left"><a href={`buyer/${item.id}`}>{item.id}</a></TableCell>
            <TableCell align="left">{ShowSearchItem(item.username, props.filter, props.isActiveSearch)}</TableCell>
            <TableCell align="left">{item.averageCheck}</TableCell>
            <TableCell align="left">{item.numberOfPurchases}</TableCell>
            <TableCell align="left">{item.totalRevenues}</TableCell>
          </TableRow>
        ))
      );
    }
    if (props.numberShow === '5' && props.pagination === '') {
      return (
        props.items.slice(0, props.numberShow).map((item) => (
          <TableRow key={item.id}>
            <TableCell align="left"><a href={`buyer/${item.id}`}>{item.id}</a></TableCell>
            <TableCell align="left">{ShowSearchItem(item.username, props.filter, props.isActiveSearch)}</TableCell>
            <TableCell align="left">{item.averageCheck}</TableCell>
            <TableCell align="left">{item.numberOfPurchases}</TableCell>
            <TableCell align="left">{item.totalRevenues}</TableCell>
          </TableRow>
        ))
      );
    }
    if (props.numberShow === '5' && props.pagination != '') {
      if (props.pagination === '1') {
        return (
          props.items.slice(0, 5).map((item) => (
            <TableRow key={item.id}>
              <TableCell align="left"><a href={`buyer/${item.id}`}>{item.id}</a></TableCell>
              <TableCell align="left">{ShowSearchItem(item.username, props.filter, props.isActiveSearch)}</TableCell>
              <TableCell align="left">{item.averageCheck}</TableCell>
              <TableCell align="left">{item.numberOfPurchases}</TableCell>
              <TableCell align="left">{item.totalRevenues}</TableCell>
            </TableRow>
          ))
        );
      }
      if (props.pagination === '2') {
        return (
          props.items.slice(5, 10).map((item) => (
            <TableRow key={item.id}>
              <TableCell align="left"><a href={`buyer/${item.id}`}>{item.id}</a></TableCell>
              <TableCell align="left">{ShowSearchItem(item.username, props.filter, props.isActiveSearch)}</TableCell>
              <TableCell align="left">{item.averageCheck}</TableCell>
              <TableCell align="left">{item.numberOfPurchases}</TableCell>
              <TableCell align="left">{item.totalRevenues}</TableCell>
            </TableRow>
          ))
        );
      }
      if (props.pagination === '3') {
        return (
          props.items.slice(10, 15).map((item) => (
            <TableRow key={item.id}>
              <TableCell align="left"><a href={`buyer/${item.id}`}>{item.id}</a></TableCell>
              <TableCell align="left">{ShowSearchItem(item.username, props.filter, props.isActiveSearch)}</TableCell>
              <TableCell align="left">{item.averageCheck}</TableCell>
              <TableCell align="left">{item.numberOfPurchases}</TableCell>
              <TableCell align="left">{item.totalRevenues}</TableCell>
            </TableRow>
          ))
        );
      }
      return (
        props.items.map((item) => (
          <TableRow key={item.id}>
            <TableCell align="left"><a href={`buyer/${item.id}`}>{item.id}</a></TableCell>
            <TableCell align="left">{ShowSearchItem(item.username, props.filter, props.isActiveSearch)}</TableCell>
            <TableCell align="left">{item.averageCheck}</TableCell>
            <TableCell align="left">{item.numberOfPurchases}</TableCell>
            <TableCell align="left">{item.totalRevenues}</TableCell>
          </TableRow>
        ))
      );
    }
    return (
      props.items.map((item) => (
        <TableRow key={item.id}>
          <TableCell align="left"><a href={`buyer/${item.id}`}>{item.id}</a></TableCell>
          <TableCell align="left">{ShowSearchItem(item.username, props.filter, props.isActiveSearch)}</TableCell>
          <TableCell align="left">{item.averageCheck}</TableCell>
          <TableCell align="left">{item.numberOfPurchases}</TableCell>
          <TableCell align="left">{item.totalRevenues}</TableCell>
        </TableRow>
      ))
    );
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow key="infoHeaderCell">
            <TableCell align="left">ID покупателя</TableCell>
            <TableCell align="left">Имя покупателя</TableCell>
            <TableCell align="left">Средний чек</TableCell>
            <TableCell align="left">Количество покупок</TableCell>
            <TableCell align="left">Общая выручка</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <ShowTable />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
