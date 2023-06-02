import * as React from 'react';
import {check} from "../services/AuthService";

function MyPage() {
    const [userInfo, setUserInfo] = React.useState(null);

    React.useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
            checkAuthorization(accessToken)
        }
    }, [])

    const checkAuthorization = (accessToken) => {
        // 권한 체크
        check({
            header: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((res) => {
            setUserInfo(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            마이페이지
        </>
    );
}

export default MyPage;