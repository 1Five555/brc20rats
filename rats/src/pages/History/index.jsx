import React from 'react';

import styles from './index.module.less'
import { Timeline } from 'antd';
const History = () => {
    return (
        <div className={styles.wrapper}>
            <Timeline
                mode="alternate"
                items={[
                    {
                        children: '2023-03-08 创立',
                    },
                    {
                        children: '2023-11-08 社区人数达到3000',
                        color: 'green',
                    },
                    {
                        children: `2023-11-22 社区人数首次破万`,
                    },
                ]}
            />
        </div>
    )
}

 export default History