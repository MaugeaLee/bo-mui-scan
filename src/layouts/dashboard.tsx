import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CropIcon from '@mui/icons-material/Crop';
import SettingsIcon from '@mui/icons-material/Settings';

import type { CustomAppBarProps, CustomDrawerProps } from '../types/dashBoardTypes'; // 커스텀 AppBar의 Prop interface 파일 import

{/** 카드 컴포넌트 */}
import { CamCardMUI } from '../component/CamItemCard';

const drawerWidth:number = 240;

// 상단 AppBar 스타일 설정
const AppBar = styled(MuiAppBar, {shouldForwardProp: (prop) => prop !== 'open'}) <CustomAppBarProps> ( // <-- 외부에서 가져온 타입을 제네릭을 적용 가능
    ({ theme, open }) => ({
        // 1. z-index 설정 : 요소들이 겹치는 순서 CSS 속성, 값이 높을 수록 위에 표시
        zIndex: theme.zIndex.drawer + 1,
        width: '100%',

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
    })
);

// 드로어 (사이드바) 스타일 설정)
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open '}) <CustomDrawerProps> (
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative', // 다른 위젯의 상대 위치 기준으로 사용되는 포지션 옵션
            whiteSpace: 'nowrap', // 텍스트 줄바꿈 방지
            width: drawerWidth,
            transition: theme.transitions.create('width', { // 너비 전환 효과
                easing: theme.transitions.easing.sharp, // 전환 속도 (점점 빨라짐)
                duration: theme.transitions.duration.enteringScreen // 열릴때 정해진 속도로 열림
            }),
            boxSizing: 'border-box', // box의 크기가 테두리를 포함한 크기로 설정된다. 테두리 추가로 인한 오차를 예방한다

            /** 열고 닫기 옵션 */
            ...(!open && { // open이 false 일때만 적용
                overflowX: 'hidden', // 가로 스크롤 숨김
                transition: theme.transitions.create('width', { //너비 전환 효과 닫힐때
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen // 닫힐때 정해진 속도로 닫힘
                }),
                width: theme.spacing(7), // 사이드바 닫혀 있을때 너비
                [ theme.breakpoints.up('sm') ]: { // 반응형 스타일 (sm 이상에서)
                    width: theme.spacing(9),
                }
            })
        }
    })
);

// 기본 테마 설정 ( MUI 사용시 테마 설정 권장 )
const defaultTheme = createTheme()
const cardData = [
    { id: 1, device_name: 'BO01A11', mac: 'FF-FF-FF-FF-FF-FF', local_ip: '192.168.0.2' },
    { id: 2, device_name: 'BO01A12', mac: 'CC-CC-CC-CC-CC-CC', local_ip: '192.168.0.2' },
    { id: 3, device_name: 'BO01A13', mac: 'DD-DD-DD-DD-DD-DD', local_ip: '192.168.0.2' },
]

function DashboardContent(){
    const [open, setOpen] = React.useState(true); // 사이드바 열림/ 닫힘 상태
    const toggleDrawer = () => {
        setOpen(!open);
        console.log(`AppBar 상태 ${open}`);
    };

    return (
        <ThemeProvider theme={ defaultTheme }>
            { /* flex : position과 float 형태의 위치 정렬 방법의 단점을 개선한 정렬 법 */ }
            <Box sx={{ display: 'flex', height: '100vh', width: '100vw', overflowX: 'hidden' }}>
                {/* 상단 AppBar (헤더) */}
                <AppBar position="absolute" open={open} > {/* position='absolute' 여야 스크롤을 해도 같이 내려옴 */}
                    <Toolbar sx={{ pr: '24px' }}>
                        <IconButton 
                            edge="start" 
                            color="inherit" 
                            aria-label="open drawer"
                            onClick={ toggleDrawer }
                            sx={{ 
                                marginRight: '36px',
                                ...(open && {display: 'none'}),
                            }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography>
                            대시 보드
                        </Typography>
                    </Toolbar>
                </AppBar>

                {/* 사이드 바 */}
                <Drawer variant="permanent" open={ open }> {/* */}
                        <Toolbar // Drawer의 상단 헤더 정렬에 사용되는 컴포넌트
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end', // 닫기 버튼을 오른쪽 끝으로 정렬
                                px: [1], // 좌우 패딩
                            }}> 
                            <IconButton onClick={ toggleDrawer }>
                                <ChevronLeftIcon /> { /* 닫기 화살표 아이콘 */}
                            </IconButton>
                        </Toolbar>
                        <Divider /> {/* 구분 선 */}
                        <List component="nav"> 
                            {/* 사이드바 메뉴 항목들 */}
                            <ListItemButton>
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon> <ListItemText primary="HOME" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CropIcon />
                                </ListItemIcon> <ListItemText primary="RoI Setting" /> 
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SettingsIcon /> 
                                </ListItemIcon> <ListItemText primary="Device Setting" />
                            </ListItemButton>
                        </List>
                </Drawer>
                {/* 메인 콘텐츠 영역 */}
                <Box
                    component="main"
                    sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                    p: 4,
                    boxSizing: 'border-box',
                    }}>

                    <Toolbar />
                    {/* 🌟 Grid 컨테이너를 사용하여 세로로 요소 배치 */}
                    <Grid container direction="column" spacing={3} alignItems="stretch" sx={{ flexGrow: 1}}> {/*direction="column"으로 세로 방향 설정*/}
                        {/* 카드가 들어오는 위치 */}
                        <CamCardMUI />
                        <CamCardMUI />
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard(){
    return <DashboardContent />;
}