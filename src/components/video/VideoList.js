import React, { useEffect, useState } from 'react';
import { Divider, List, Typography, message, Avatar } from 'antd';
import { axiosApi, API } from "../../lib/utils/axiosApi" 
import {useHistory} from "react-router-dom";


const VideoList = () => {
    const history = useHistory()

    const [data, setData] = useState([]) 
    const [loading, setLoading] = useState(false) 

    useEffect(()=>{
        loadVideos()
    }, [])

    const loadVideos = async () => {
        try {
            const response = await axiosApi.get(API.VIDEO.VIDEO_LIST)
            console.log('response.data', response.data)
            setData(response.data)
            setLoading(true)
          } catch (error) {
            console.error(error)
            message.error('Error fetch');
          } finally {
            setLoading(false)
          }
    }

    return <List
                itemLayout="horizontal"
                dataSource={data}
                loading={loading}
                renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${item.id}`} />}
                    title={<button onClick={() => location.href = `/video/${item.id}`}>{item.title}</button>}
                    description={item?.description ? item?.description : 'No description'}
                    />
                </List.Item>
                )}
  />
}

export default VideoList