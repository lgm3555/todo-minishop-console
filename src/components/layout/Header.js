import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';

function Header(props) {

    const handleButton = (type) => {
        if (props.status) {
            if (type === 'mypage') {
                if (props.name === 'main') {
                    window.location.href = '/my-page';
                } else {
                    window.location.href = '/';
                }
            }
            else {
                window.location.href = '/';
            }
        } else {
            window.location.href = '/sign-in';
        }
    }

    const handleChange = (event, newValue) => {
        props.setValue(newValue);
    };

    return (
        <React.Fragment>
            <Grid container sx={{ my: 3 }}>
                <Grid item xs={2}>
                    {props.status ? <Button onClick={() => handleButton('mypage')} size="small">{
                        props.name === 'main' ? '마이페이지' : '메인화면'
                    }</Button> : "" }
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
                        MINI-SHOP
                    </Typography>
                </Grid>
                <Grid item xs={2} sx={{textAlign: 'right'}}>
                    <Button onClick={() => handleButton('login')} size="small">{props.status ? '로그아웃' : '로그인'}</Button>
                </Grid>
            </Grid>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'center', gap: 10, borderTop: 1, borderColor: 'divider' }}
            >
                <TabList onChange={handleChange}>
                    {props.sections.map((section, key) => (
                        <Tab key={key} label={section.title} value={section.value} />
                    ))}
                </TabList>
            </Toolbar>
        </React.Fragment>
    );
}

export default Header;