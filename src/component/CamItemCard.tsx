import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CamBox = styled(Box)(
    () => ({
        flexWrap: 'wrap', // 자식 요소들이 컨테이너를 벗어날 경우 다음 줄로 넘어가도록 한다.
        justifyContent: 'center', // 자식 요소들을 가로 중앙에 정렬한다.
        gap: 2, // 자식 요소들 사이에 일정 간격 (MUI 간격 단위)를 추가한다.
        flexGlow: 1
    })
);

const CamCard = styled(Card)(
    () => ({
        minWidth: 275, // 최소 크기를 제한
        flesGrow: 1, // 남은 공간을 모두 채우로겨 시도한다.
        alignItems: 'center',
        borderRadius: '10px' // Card 외곽 둥글
    })
);

export function CamCardMUI (){
    const [ displayName , displayNameState ] = useState('BO01A11');
    const [ localIP , localIPState] = useState('192.168.0.2');

    return (
        <CamBox>
            <CamCard variant='outlined'> {/* 카드의 전체 컨테이너 */}
                <CardContent>
                    <Typography variant='h5'> { displayName } </Typography>
                    <Typography> { localIP } </Typography>
                    
                </CardContent>
            </CamCard>
        </CamBox>
    );
}