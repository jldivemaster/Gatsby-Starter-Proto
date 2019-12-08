import React from 'react'
import { Typography } from 'antd'
import LandingLayout from '@layouts/LandingLayout'

export default () => (
  <div>
  <LandingLayout>
    <div className='flex flex-col items-center'>
      <Typography.Title className='text-primary-color'>
        Room2
      </Typography.Title>

      <img src='/cover.png' alt='logo' className='mt-10' />
    </div>
  </LandingLayout>
  </div>
)
