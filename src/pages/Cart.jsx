import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { 
    addProduct,
    removeProduct,
    getCart,
    getPriceBreakdown
} from './../features/counter/cartSlice';

const Cart = () => {
    const cart = useSelector(getCart);
    const { totalPrice, hst, totalPayableAmount } = useSelector(getPriceBreakdown);
    const dispatch = useDispatch();
    const tableData = () => {
        return cart.map(product => (<TableRow key={product.id}>
            <TableCell>
                {product.name}
            </TableCell>
            <TableCell>
                {product.price}
            </TableCell>
            <TableCell>
                {product.quantity}
            </TableCell>
            <TableCell>
                {product.totalAmount}
            </TableCell>
            <TableCell align='center'>
                <IconButton onClick={() => dispatch(addProduct(product.id))}>
                    <AddCircleIcon />
                </IconButton>
                {product.quantity}
                <IconButton 
                    disabled={product.quantity <= 0}
                    onClick={() => dispatch(removeProduct(product.id))}
                >
                    <RemoveCircleIcon />
                </IconButton>
            </TableCell>
        </TableRow>))
    }

    const priceBreakDown = () => {
        return cart.length ? <>
            <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>Total Amount</TableCell>
                <TableCell>{totalPrice}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>HST(13%)</TableCell>
                <TableCell>{hst}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>Total Payable Amount</TableCell>
                <TableCell>{totalPayableAmount}</TableCell>
            </TableRow>
        </> : <></>;
    }
    return(<div className='cart-container'>
        <Typography variant='h4' className='header' gutterBottom>
            Your Shopping Cart
        </Typography>
        <TableContainer component={Paper} className='table-container'>
            <Table stickyHeader aria-label='list table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Rate</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Total Price</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className='table-body'>
                    {tableData()}
                    {priceBreakDown()}
                </TableBody>
            </Table>
        </TableContainer>
        <div className='cart-footer'>
            <Link to="/">
                <Button 
                    color="primary"
                    startIcon={<ArrowBack />}
                >
                    Go Back to Shopping
                </Button>
            </Link>
            <Button 
                color="primary"
                endIcon={<ArrowForward />}
            >
                Proceed
            </Button>
        </div>
    </div>);
}

export default Cart;
