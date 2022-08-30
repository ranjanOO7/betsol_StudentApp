import { Breadcrumb, Layout, Menu } from 'antd'
import { Content, Header, Footer } from 'antd/lib/layout/layout'
//import Item from 'antd/lib/list/Item'
import React, { Component, Row, Col } from 'react'
import Modal1 from './AddStudentModal'
import Student from './Student'


const data = [
    {
        name:"Charan",
        usn:"1BG19CS030",
        email:"charan@gmail.com",
        branch:"cse",
        cgpa:"9.0"
    },
    {
        name:"Jake",
        usn:"1BG19CS020",
        email:"jake@gmail.com",
        branch:"ECE",
        cgpa:"8.0"
    },
    {
        name:"Jake",
        usn:"1BG19CS020",
        email:"jake@gmail.com",
        branch:"ECE",
        cgpa:"8.0"
    },{
        name:"Jake",
        usn:"1BG19CS020",
        email:"jake@gmail.com",
        branch:"ECE",
        cgpa:"8.0"
    },
    {
        name:"Jake",
        usn:"1BG19CS020",
        email:"jake@gmail.com",
        branch:"ECE",
        cgpa:"8.0"
    }
]

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
                {/* <Grid container-spacing = {2}>
                    {/* <Grid item-xs = {4}>
                        <Item>
                            {
                                data.map((student) => (
                                
                                ))
                            }
                        </Item>
                    </Grid>
                    
                </Grid> */} 
                <Row gutter={40}>
  {data.map(student => 
    <Col 
      xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }}
      lg={{ span: 2 }} xl={{ span: 1 }}
    ><Student student={student}/></Col>
  )}
</Row>
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