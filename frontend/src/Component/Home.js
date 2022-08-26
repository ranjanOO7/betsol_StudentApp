import { Breadcrumb, Layout, Menu } from 'antd'
import { Content, Header, Footer } from 'antd/lib/layout/layout'
import React, { Component } from 'react'
import Modal1 from './AddStudentModal'

class Home extends Component {
  render() {
    return (
        <>
            <Layout className="layout">
                <Header>
                    <div className="logo" style={{color:'white',float: 'left'}}>Student App</div>
                        <Menu
                        theme="dark"
                        mode="horizontal"
                        // defaultSelectedKeys={['2']}
                        // items={new Array(15).fill(null).map((_, index)=>{
                        //     const key = index + 1;
                        //     return{
                        //         key,
                        //         label: `nav ${key}`,
                        //     }
                        // })}
                        />
                </Header>
                <Content
                    style={{
                        padding: '0 50px', //Ashwini take car of this
                    }}
                    >
                        <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                        >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        </Breadcrumb>
                        
                        <div className='site-layout-content' style={{float:'left'}}>
                        <Modal1 /><br/>
                        </div>
                </Content>
                <Footer style={{
                    textAlign: 'center',
                }}>
                </Footer>
            </Layout>
            </>
    )
  }
}
export default Home