import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        flexGrow: 1, // 남은 공간을 모두 채우로겨 시도한다.
        alignItems: 'center',
        borderRadius: '10px' // Card 외곽 둥글
    })
);

export function CamCardMUI (){
    const [ displayName , displayNameState ] = useState('BO01A11');
    const [ macAddress, macAddressState ] = useState('FF-FF-FF-FF-FF-FF');
    const [ localIP , localIPState] = useState('192.168.0.2');

    return (
        <CamBox>
            <CamCard variant='outlined'> {/* 카드의 전체 컨테이너 */}
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex', // box를 flexbox로 만든다
                            flexWrap: 'wrap',  // 화면이 작아지면 내부 요소를 다음 줄로 넘긴다.
                            gap: '10px', // 요소 사이의 간격
                            justifyContent: 'row',
                            alignItems: 'center',
                            p:1,
                        }}>
                        <Typography variant='h4'> { displayName } </Typography>
                        <Stack sx={{
                            direction: 'vertical'
                        }}>
                            <Typography> { localIP } </Typography>
                            <Typography> {macAddress } </Typography>
                        </Stack>
                    </Box>
                </CardContent>
                <Accordion sx={{ width: '100%'}}>
                    { /* AccordionSummary가 버튼 역할을 수행함 */}
                    <AccordionSummary 
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            minHeight: 25,
                            height: 30,
                            '& .MuiAccordionSummary-content': {
                                justifyContent: 'center',
                                margin: '12px 0', 
                            },
                            '&:focus': { // 초점이 맞춰졌을 대
                                outline: 'none'
                            },
                        }}>
                        <Typography> !!! 아이콘으로 대체될 예정     </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CardContent>
                            <Typography> 버튼 클릭으로 수직 확장 </Typography>
                        </CardContent>
                    </AccordionDetails>
                </Accordion>
            </CamCard>
        </CamBox>
    );
}