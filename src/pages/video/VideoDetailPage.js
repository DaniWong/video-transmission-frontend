import React, { useState, useEffect } from 'react';
import VideoDetail from '../../components/video/VideoDetail';
import { Typography, Button } from 'antd';

const { Title } = Typography;


const VideoDetailPage = () => {
    return <>
        <Title>Video Detail</Title>
        <VideoDetail/>
        <br></br>
        <Button onClick={() => location.href = '/video'}>Back to list</Button>
    </>
}

export default VideoDetailPage