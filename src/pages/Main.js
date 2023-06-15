import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MainFeaturedPost from '../components/pages/MainFeaturedPost';
import CheckPost from '../components/pages/CheckPost';
import Header from "../components/layout/Header";
import {check} from "../services/AuthService";
import {TabContext, TabPanel} from "@mui/lab";
import Box from "@mui/material/Box";

const sections = [
    { title: '인기상품', value: '1' },
    { title: '상의', value: '2' },
    { title: '하의', value: '3' },
    { title: '셔츠', value: '4' },
    { title: '니트', value: '5' },
    { title: '신발', value: '6' },
    { title: '악세사리', value: '7' },
];

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '/image/content1.gif',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '/image/content2.gif',
        imageLabel: 'Image Text',
    },
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '/image/content3.gif',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '/image/content4.gif',
        imageLabel: 'Image Text',
    },
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '/image/content5.gif',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '/image/content6.gif',
        imageLabel: 'Image Text',
    },
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '/image/content7.gif',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '/image/content1.gif',
        imageLabel: 'Image Text',
    }
];

const theme = createTheme();

export default function Main() {

    const [status, setStatus] = React.useState(false);
    const [value, setValue] = React.useState('1');

    React.useEffect(() => {
        check().then((res) => {
            console.log(res.data)
            if (res.data == 'active') setStatus(true)
            else setStatus(false)
        }).catch((err) => {
            setStatus(false)
        })
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container sx={{maxWidth: '85%'}} maxWidth={false}>
                <TabContext value={value}>
                    <Header name='main' sections={sections} status={status} setValue={setValue} />
                    <Box
                        gap={20}
                        sx={{
                            borderTop: 1,
                            borderColor: 'divider',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <TabPanel value="1">
                            <MainFeaturedPost />
                            <Grid container spacing={4}>
                                {featuredPosts.map((post, key) => (
                                    <CheckPost key={key} post={post} />
                                ))}
                            </Grid>
                        </TabPanel>
                    </Box>
                </TabContext>
            </Container>
        </ThemeProvider>
    );
}