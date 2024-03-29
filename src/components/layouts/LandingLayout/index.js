import React, { useState, memo, setState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Layout, Menu, Icon, Typography } from 'antd'
import { ReactComponent as LogoIcon } from '@static/logo.svg'

const LandingLayout = ({ children }) => {
  const [collapsed, toggle] = useState(true)
  const [view, setView] = useState(1)

  const handleClick = (e) => {
    console.log(e.key)
    setView(e.key)
  }

  return (
    <div className='landing-layout'>
      <Layout>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme='light'
        >
          <div className='h-20 m-2 flex items-center justify-around'>
            <LogoIcon className='h-10 w-10 mr-2 fill-primary-color' />
            <Typography.Title
              level={4}
              className={classNames('text-primary-color', {
                hidden: collapsed,
              })}
            >
              {process.env.APP_NAME}
            </Typography.Title>
          </div>
          <Menu
            theme='light'
            mode='inline'
            defaultSelectedKeys={['1']}
            className='border-0'
            onClick={(e) => handleClick(e)}
          >
            <Menu.Item key='1'>
              <Icon type='video-camera' />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='user' />
              <span>Room 1</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <Icon type='user' />
              <span>Room 2</span>
            </Menu.Item>
            <Menu.Item key='4'>
              <Icon type='upload' />
              <span>Map</span>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className='leading-normal ml-4 text-base'
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => toggle(!collapsed)}
            />
          </Layout.Header>
          <Layout.Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <div style={{ minHeight: '100vh' }}>{children}</div>
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  )
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(LandingLayout)
