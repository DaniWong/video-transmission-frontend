import React, { useState, useEffect } from 'react';
import VideoList from '../../components/video/VideoList';
import { Typography } from 'antd';

const { Title } = Typography;


const VideoListPage = () => {
    return <>
        <Title>Video List</Title>
        <VideoList/>
    </>
}

export default VideoListPage