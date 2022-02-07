import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Header = () => {
    return(<AppBar position="static">
        <Toolbar className="toolbar">
            <Typography variant="h6">
                Marketplace
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>);
};

export default Header;