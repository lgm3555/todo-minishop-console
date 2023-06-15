import React from 'react';
import {Container} from '@mui/material';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Header from "../components/layout/Header";
import Box from "@mui/material/Box";
import {TabContext, TabPanel} from "@mui/lab";

const theme = createTheme();

const sections = [
    { title: '정보', value: '1' },
    { title: '주문내역', value: '2' },
    { title: '관심상품', value: '3' },
    { title: '게시물', value: '4' },
    { title: '적립금/쿠폰', value: '5' },
];

const MyPage = () => {

    const [value, setValue] = React.useState('1');

    return (
        <ThemeProvider theme={theme}>
            <Container sx={{maxWidth: '85%'}} maxWidth={false}>
                <TabContext value={value}>
                    <Header name='mypage' sections={sections} status={true} setValue={setValue} />
                    <Box
                        gap={20}
                        sx={{
                            borderTop: 1,
                            borderColor: 'divider',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <TabPanel value="1">정보</TabPanel>
                    </Box>
                </TabContext>
            </Container>
        </ThemeProvider>
    );
};

export default MyPage;
