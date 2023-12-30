import React, { useEffect, useState } from 'react';
import { Divider, List, Typography, message, Space, Card, Button } from 'antd';
import { axiosApi, API } from "../../lib/utils/axiosApi" 
import {useHistory, useParams} from "react-router-dom";


const VideoDetail = () => {
    const history = useHistory()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false) 
    const { id } = useParams();

    useEffect(()=>{
        if(id)
            loadVideos()
    }, [id])

    const loadVideos = async () => {
        try {
            setLoading(true)
            const url = `${API.VIDEO.VIDEO_LIST}${id}`
            const response = await axiosApi.get(url)
            setData(response.data)
          } catch (error) {
            console.error(error)
            message.error('Error fetch');
          } finally {
            setLoading(false)
          }
    }

    return (
        <Space direction="vertical" size={20}>
            <Card loading={loading} title={data?.title ? data?.title : ''} style={{ width: 300 }}>
            <p>{data?.description ? data?.description : 'No description'}</p>
            <p>Velocity: {data?.velocity ? data?.velocity : ''}</p>
            <p>Processed data: {data?.video_processed_data ? data?.video_processed_data : 'No data'}</p>
            <p>Video: {data?.video_file ? <a href={data.video_file} target='_blank'>{data?.video_file}</a> : 'No video'}</p>
            </Card>
        </Space>
    )
}

export default VideoDetail