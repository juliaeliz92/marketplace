import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
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
import Badge from '@material-ui/core/Badge';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { 
    getDisplayProducts, 
    searchProduct,
    addProduct,
    removeProduct,
    getCart
} from './../features/counter/cartSlice';

const ProductList = () => {
    const products = useSelector(getDisplayProducts);
    const cart = useSelector(getCart);
    const dispatch = useDispatch();
    const tableData = () => {
        return products.map(product => (<TableRow key={product.id}>
            <TableCell>
                {product.name}
            </TableCell>
            <TableCell>
                {product.description}
            </TableCell>
            <TableCell>
                {product.price}
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
    return(
        <div className='list-container'>
            <div className='menu-bar'>
                <TextField 
                    id="outlined-basic" 
                    label="Search Product"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    onChange={(e) => dispatch(searchProduct(e.target.value))}
                />
                <Link to="/cart">
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<Badge badgeContent={cart.length} color="secondary">
                            <ShoppingCartIcon/>
                        </Badge>}
                    >
                        Your Cart
                    </Button>
                </Link>
            </div>
            <TableContainer component={Paper} className='table-container'>
                <Table stickyHeader aria-label='list table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className='table-body'>
                        {tableData()}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ProductList;