import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { CircularProgress, Grid, TableHead } from '@material-ui/core';


import crown1 from '../../assets/image/rank/crown1.png';
/*import warrior from '../../assets/image/rank/warrior.png';
import thief from '../../assets/image/rank/thief.png';
import magician from '../../assets/image/rank/magician.png';
import bowman from '../../assets/image/rank/bowman.png';*/

const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};


const useStyles2 = makeStyles({
    table: {
        minWidth: 500,
    },
});

export default function CustomPaginationActionsTable(props) {
    const { data, headers } = props;


    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <React.Fragment>
            <Grid container justify="center" style={{ marginBottom: "2vh" }}>
                <img src={crown1} alt="crown" style={{ width: "200px" }}></img>
            </Grid>
            <TableContainer component={Paper}>
                <Table stickyHeader className={classes.table} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: 160 }} align="left">Rank</TableCell>
                            {headers.map((name) => {
                                return (<TableCell style={{ width: 160 }} key={`header-${name}`} align="left">{name}</TableCell>);
                            })}
                        </TableRow>
                    </TableHead>
                    {data.length === 0 ?
                        <TableBody>
                            <TableRow>
                                <TableCell> 
                                    <CircularProgress size={30}></CircularProgress>
                                </TableCell>
                                {headers.map(() => {
                                    return (
                                        <TableCell>
                                            <CircularProgress size={30}></CircularProgress>
                                        </TableCell>)
                                })
                                }</TableRow>
                        </TableBody> :
                        <TableBody>
                            {
                                (rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : data).map((row, index) => (
                                        <TableRow key={`${row.name}-${index}`}>
                                            <TableCell style={{ width: 160 }} align="left">
                                                {index + 1}
                                            </TableCell>
                                            {Object.keys(row).map((key, index) => {

                                                if (key === 'job') {
                                                    var job = "";
                                                    switch (row[key].toString()) {
                                                        case "000": job = "beginner";
                                                            break;
                                                        case "100":
                                                        case "110":
                                                        case "111":
                                                        case "130":
                                                        case "120": job = "warrior";
                                                            break;
                                                        case "200":
                                                        case "210":
                                                        case "211":
                                                        case "212":
                                                        case "220":
                                                        case "221":
                                                        case "222":
                                                        case "230":
                                                        case "231":
                                                        case "232": job = "magician";
                                                            break;
                                                        case "310":
                                                        case "311":
                                                        case "312":
                                                        case "320":
                                                        case "321":
                                                        case "300": job = "bowman";
                                                            break;
                                                        case "400":
                                                        case "410":
                                                        case "411":
                                                        case "412":
                                                        case "420":
                                                        case "421":
                                                        case "1400":
                                                        case "422": job = "thief"
                                                            break;
                                                        case "2100":
                                                        case "2110":
                                                        case "2111":
                                                        case "2112": job = "aran"
                                                            break;
                                                        default: job = "beginner"
                                                    }//end switch
                                                    return (<TableCell key={`tableCell-${index}`} style={{ width: 160 }} align="left">
                                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/image/rank/${job}.png`} alt={job}></img>
                                                    </TableCell>)
                                                } else
                                                    return (<TableCell key={`tableCell-${index}`} style={{ width: 160 }} align="left">
                                                        {row[key]}
                                                    </TableCell>)
                                            })}
                                        </TableRow>))}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    }
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={5}
                                count={data.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}
