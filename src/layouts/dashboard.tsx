import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar'
import MuiDrawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'

import type { CustomAppBarProps } from '../types/appBarTypes'; // 커스텀 AppBar의 Prop interface 파일 import


const drawerWidth:number = 240;

// 상단 AppBar 스타일 설정
const AppBar = styled(MuiAppBar, {shouldForwardProp: (prop) => prop !== 'open'}) <CustomAppBarProps> ( // <-- 외부에서 가져온 타입을 제네릭을 적용 가능
    ({ theme, open }) => ({
        // 1. z-index 설정 : 요소들이 겹치는 순서 CSS 속성, 값이 높을 수록 위에 표시
        zIndex: theme.zIndex.drawer + 1,

        // 2. 기본 전환 (transition) 효과 설정 : transition은 css 속성 값이 변할때 부드러운 애니메이션 효과를 주는 속성
        transition: theme.transitions.create(['width', 'margin'],{
            easing: theme.transitions.easing.sharp, // 전환 속도 곡선 (점점 빨라짐)
            duration: theme.transitions.duration.leavingScreen, // 전환 지속 시간
        }),

        // 3. 'open' 상태일때 적용되는 스타일 (조건부 스타일링)
        ...(open && { // <-- open이 true일 때만 위 스크립트에 merge됨
            marginLeft: drawerWidth, // 사이드바 너비 만큼 왼쪽 마진
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'] ,{
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

// 기본 테마 설정 ( MUI 사용시 테마 설정 권장 )
const defaultTheme = createTheme();

function DashboardContent(){
    const [open, setOpen] = React.useState(true); // 사이드바 열림/ 닫힘 상태
    const toggleDrawer = () => {
        setOpen(!open);
        console.log(`AppBar 상태 ${open}`);
    };

    return (
        <ThemeProvider theme={ defaultTheme }>
            { /* flex : position과 float 형태의 위치 정렬 방법의 단점을 개선한 정렬 법 */ }
            <Box sx={{ display: 'flex' }}>

                {/* 상단 AppBar (헤더) */}
                <AppBar position="absolute" open={open}>
                    <Toolbar sx={{ pr: '24px' }}>
                        <IconButton 
                            edge="start" 
                            color="inherit" 
                            aria-label="open drawer"
                            onClick={ toggleDrawer }
                            sx={{ 
                                marginRight: '36px',
                                // ...(open && {display: 'none'}), // 사이드바 생성후 주석 풀것
                            }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography>
                            대시 보드
                        </Typography>
                    </Toolbar>
                </AppBar>

                {/* 사이드 바 */}
                <MuiDrawer variant="permanent">
                        aaa
                </MuiDrawer>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard(){
    return <DashboardContent />;
}