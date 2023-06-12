import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../components/pages/MainFeaturedPost';
import CheckPost from '../components/pages/CheckPost';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {check} from "../services/AuthService";

const sections = [
    { title: 'Top', url: '#' },
    { title: 'BOTTOM', url: '#' },
    { title: 'SHIRT', url: '#' },
    { title: 'KNIT', url: '#' },
    { title: 'SHOES', url: '#' },
    { title: 'ACC', url: '#' },
];

const mainFeaturedPost = {
    title: '',
    description: "",
    image: '',
    imageText: 'main image description',
    linkText: ''
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '',
        imageLabel: 'Image Text',
    },
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '',
        imageLabel: 'Image Text',
    },
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '',
        imageLabel: 'Image Text',
    },
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '',
        imageLabel: 'Image Text',
    },
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '',
        imageLabel: 'Image Text',
    }
];

const theme = createTheme();

export default function Main() {

    const [status, setStatus] = React.useState(false);

    React.useEffect(() => {
        check().then((res) => {
            if (res.data == 'user') setStatus(true)
            else setStatus(false)
        }).catch((err) => {
            setStatus(false)
        })
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container sx={{maxWidth: '85%'}} maxWidth={false}>
                <Header title="MINI-SHOP" sections={sections} status={status} />
                <MainFeaturedPost post={mainFeaturedPost} />
                <Grid container spacing={4}>
                    {featuredPosts.map((post) => (
                        <CheckPost key={post.title} post={post} />
                    ))}
                </Grid>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}