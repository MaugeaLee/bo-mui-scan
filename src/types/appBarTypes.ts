import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';


// Mui의 기본 AppBar의 AppBarrops를 확장하여 'open' prop를 추가한다.
export interface CustomAppBarProps extends MuiAppBarProps{
    open: boolean;
}
