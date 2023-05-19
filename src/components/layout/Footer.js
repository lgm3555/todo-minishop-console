import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";

function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', marginTop: '100px', backgroundColor: '#f8f8f8' }}>
            <Divider my={6}/>
            <Container maxWidth={false} sx={{maxWidth: '85%'}} style={{display: 'flex'}}>
                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    style={{ flex: 0.5 }}
                >
                    <p>전화번호 / 운영 시간</p>
                    <p>070-0000-0000</p>
                    <p>평일 / 14:00 ~ 17:00</p>
                    <p>휴무 / 토, 일요일, 공휴일</p>
                </Typography>
                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    style={{ flex: 0.3 }}
                >
                    <p>은행</p>
                    <p>[무통장 입금 계좌]</p>
                    <p>국민 000000-00-000000</p>
                    <p>예금주 : 홍길동(미니샵)</p>
                </Typography>
                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    style={{ flex: 0.5 }}
                >
                    <p>.</p>
                    <p>[배송비 입금 전용 계좌]</p>
                    <p>KEB 하나 000-000000-00000</p>
                    <p>예금주 : 홍길동</p>
                </Typography>
                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    style={{ flex: 0.7 }}
                >
                    <p>반품주소지</p>
                    <p>카카오톡 문의 : [링크]</p>
                    <p>ADDRESS : 00000 서울특별시 어디구 어디동 000-00 어디빌딩 0층 미니샵</p>
                </Typography>
                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                >
                    <p>회사 정보</p>
                    <p>ADDRESS : 00000 서울특별시 어디구 어디동 000-00 어디빌딩 0층 미니샵</p>
                    <p>BUSINESS LICENSE : 000-00-00000</p>
                    <p>ONLINE BUSINESS LICENSE : 0000-000000-0000</p>
                </Typography>
            </Container>
        </Box>
    );
}

Footer.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Footer;