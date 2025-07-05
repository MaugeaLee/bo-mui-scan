import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material'; // MUI 컴포넌트 임포트
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'; // MUI 아이콘 임포트

function App() {
  return (
    /* 내용물의 최대 너비를 제한하고 중앙에 배치하는 레이아웃 컴포넌트 */
    <Container maxWidth="sm" sx={{ mt: 4, textAlign: 'center'}}>
      {/* 다양한 스타일링을 적용할 수 있는 유연한 컨테이너 컴포넌트 */}
      <Box sx={{ my: 4 }}>
        {/* Typography: 텍스트를 표현하는 컴포넌트 */}
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to MUI with React
        </Typography>


        {/* Button: 버튼 컴포넌트 */}
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Click Me!
        </Button>

        {/* 아이콘 사용 */}
        <Box sx={{ mt: 3}}>
          <AccessAlarmIcon sx={{ fontSize: 40 }}/>
          <Typography variant="body1" component="span">
            시간이 없다.
          </Typography>
        </Box>

        <Box sx={{ mt: 3}}>
          <Typography variant="h6" component="p">
            MUI 컴포넌트를 이용하여 멋진 UI를 만들고 싶다!
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default App
