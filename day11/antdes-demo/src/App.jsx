import { Layout, Space, Typography, Menu, Button, Image } from 'antd';
import { AppstoreOutlined, StarOutlined, BorderOutlined, ClockCircleOutlined, CalculatorOutlined, MenuOutlined, ArrowsAltOutlined} from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import ChessBoard from './components/chess/ChessBoard';
import Calculator from './components/calculator/Calculator'
import Pomodoro from './components/pomodoro/Pomodoro';
import UnitConverter from './components/unit-converter/UnitConverter';
import Kits from './assets/kits.jpg'

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;

const headerStyle = {
  height: 64,
  lineHeight: '64px',
  backgroundColor: '#2a2b36',
  width: '100%',
  fontSize: '10px',
  fontWeight: 'bold',
  alignItems: 'center'
};

const contentStyle = {
  textAlign: 'center',
  color: 'black',
  backgroundColor: 'white',
  lineHeight: '100px',
};

const siderStyle = {
  textAlign: 'center',
  color: 'black',
  backgroundColor: '#483285',
  border: '1px solid #ccc',
  height: '90vh'
};

const footerStyle = {
  textAlign: 'center',
  color: 'rgba(44,56,74,.95)',
  backgroundColor: '#ebedef',
  minHeight: '100',
  position: 'fixed',
  bottom: 0,
  width: '100%'
};

const navigation = [
  {
    key: '/hello-world',
    label: 'Hello World',
    icon: <StarOutlined />
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

function HelloWorld() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

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
      <Menu selectedKeys={[selectedKey]}
        mode="inline"
        style={{
          height: '100%',
          backgroundColor: '#3c4b64',
          color: 'hsla(0,0%,100%,.6)'
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
            <Space align="left">
              <Image src={Kits} style={{width: 32, height: 32}}/>
              {/* <Title style={{
                fontSize: 20,
                color: 'white',
                marginTop: 15
              }}>
                <AppstoreOutlined /> Demo applications using AntDesign */}
                <Button type="primary" onClick={toggleCollapsed}>
                <MenuOutlined />
              </Button>
            </Space>
          </Header>
          <Layout hasSider>
            <MySider collapsed={collapsed}/>
            <Content style={contentStyle}>
              <Switch>
                <Route path="/hello-world">
                  <HelloWorld />
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