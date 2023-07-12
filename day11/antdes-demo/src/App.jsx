import { Layout, Space, Typography, Menu, Button, Image} from 'antd';
import { BorderOutlined, ClockCircleOutlined, CalculatorOutlined, MenuOutlined, ArrowsAltOutlined, RedditOutlined} from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import ChessBoard from './components/chess/ChessBoard';
import Calculator from './components/calculator/Calculator'
import Pomodoro from './components/pomodoro/Pomodoro';
import UnitConverter from './components/unit-converter/UnitConverter';
import Kits from './assets/kits.jpg'
import ZodiacApp from './components/zodiac/Zodiac';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;

const headerStyle = {
  height: 64,
  backgroundColor: 'deepskyblue',
  width: '100%',
  fontSize: '14px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  paddingLeft: '24px'
};

const contentStyle = {
  textAlign: 'center',
  color: 'black',
  backgroundColor: '#f5f5f5',
  lineHeight: '100px',
};

const siderStyle = {
  textAlign: 'center',
  color: '#ffffff',
  backgroundColor: '#001529',
  border: '1px solid #ccc',
  height: '90vh'
};

const footerStyle = {
  textAlign: 'center',
  color: '#2c384a',
  backgroundColor: '#ebedef',
  minHeight: '100',
  position: 'fixed',
  bottom: 0,
  width: '100%'
};

const navigation = [
  {
    key: '/zodiac',
    label: 'Zodiac',
    icon: <RedditOutlined />
  },
  {
    key: '/unit-converter',
    label: 'Unit Converter',
    icon: <ArrowsAltOutlined /> 
  },
  {
    key: '/calculator',
    label: 'Calculator',
    icon: <CalculatorOutlined />
  },
  {
    key: '/chess-board',
    label: 'Chessboard',
    icon: <BorderOutlined />
  },
  {
    key: '/pomodoro',
    label: 'Pomodoro',
    icon: <ClockCircleOutlined />
  }
];

function HomePage() {
  return (
    <div>
      <h1>Please select a mini app from the sidebar</h1>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function MySider({collapsed, toggleCollapsed}) {
  const location = useLocation();
  const selectedKey = location.pathname;
  return (
    <Sider collapsed={collapsed} onCollapse={toggleCollapsed} style={siderStyle}>
      <Menu selectedKeys={[selectedKey] }
        theme="light"
        mode="inline"
        style={{
          height: '100%',
          backgroundColor: 'white',
          color: 'darkblue'
        }}
      >
        {navigation.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Router>
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
        size={[0, 48]}
      >
        <Layout>
          <Header style={headerStyle}>
            <Image src={Kits} style={{width: 40, height: 40}}/>
              <Button type="primary" shape='circle' size='large' icon={<MenuOutlined />} onClick={toggleCollapsed} style={{marginLeft: '1em'}}>
              </Button>
              <Title level={3} style={{color: '#ffffff', margin: 'auto'}}>Demo App using AntDesign</Title>
          </Header>
          <Layout hasSider>
            <MySider collapsed={collapsed}/>
            <Content style={contentStyle}>
              <Switch>
                <Route path="/zodiac">
                  <ZodiacApp />
                </Route>
                <Route path="/unit-converter">
                  <UnitConverter />
                </Route>
                <Route path="/calculator">
                  <Calculator />
                </Route>
                <Route path="/chess-board">
                  <ChessBoard />
                </Route>
                <Route path="/pomodoro">
                  <Pomodoro />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </Content>
          </Layout>
          <Footer style={footerStyle}>
            <Text strong italic>Ant Design Demo ©2023 Created by LinhNN</Text>
          </Footer>
        </Layout>
      </Space>
    </Router>
  );
}

export default App;