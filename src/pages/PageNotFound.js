import React from 'react'
import { useHistory } from "react-router-dom"
import { Button, Col } from 'antd'

const PageNotFound = () => {

    const history = useHistory();
    return (

        <div align="middle" style={{ paddingTop: 50 }}>

            <Col span={23} style={{ textAlign: "center", paddingTop: 20 }}>
            {'Page not found'}
            </Col>
        </div>


    )
}

export default PageNotFound