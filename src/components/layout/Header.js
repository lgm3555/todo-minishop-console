import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import {signOut} from "../../services/AuthService";

function Header(props) {
    const { sections, title } = props;

    const handleButton = () => {
        if (props.status) {
            signOut().then((res) => {
                console.log('로그아웃')
            })
        } else {
            window.location.href = '/signIn';
        }
    }

    return (
        <React.Fragment>
            <Grid container sx={{ my: 3 }}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={8}>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        sx={{ flex: 1 }}
                    >
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={2} sx={{textAlign: 'right'}}>
                    <Button onClick={() => handleButton} size="small">{props.status ? '로그아웃' : '로그인'}</Button>
                </Grid>
            </Grid>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'center', gap: 10, borderTop: 1, borderColor: 'divider' }}
            >
                {sections.map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.url}
                        sx={{ p: 1, flexShrink: 0 }}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }),
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default Header;