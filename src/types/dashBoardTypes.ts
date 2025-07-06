import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import type { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer'

// Mui의 기본 AppBar의 AppBarPops를 확장하여 'open' prop를 추가한다.
export interface CustomAppBarProps extends MuiAppBarProps {
    open: boolean;
}

// mui 기본 MuiDrawer를 확장하여 'open' prop를 추가한다.
export interface CustomDrawerProps extends MuiDrawerProps {
    open: boolean;
}
