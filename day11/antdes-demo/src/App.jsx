import { useState } from 'react';
import { Layout, Space, Typography, Menu } from 'antd';
import { AppstoreOutlined, StarOutlined, BorderOutlined, ClockCircleOutlined, CalculatorOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import ChessBoard from './components/chess/ChessBoard';
import Calculator from './components/calculator/Calculator'
import Pomodoro from './components/pomodoro/Pomodoro';
import QuoteOfTheDay from './components/quote/QuoteOfTheDay'
const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;

const headerStyle = {
  height: 64,
  lineHeight: '64px',
  backgroundColor: '#3c4b64',
  width: '100%',
  fontSize: '10px',
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const contentStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: 'black',
  backgroundColor: 'white',
  height: '90vh'
};

const siderStyle = {
  textAlign: 'center',
  color: 'black',
  backgroundColor: '#483285',
  border: '1px light black',
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

function MySider() {
  const location = useLocation();
  const selectedKey = location.pathname;

  return (
    <Sider style={siderStyle}>
      <Menu selectedKeys={[selectedKey]}
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
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
  const [currentComponent, setCurrentComponent] = useState("Hello World");

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
            <Title style={{
              fontSize: 20,
              color: 'white',
              marginTop: 15
            }}>
              <AppstoreOutlined /> Demo applications using AntDesign
            </Title>
          </Header>
          <Layout hasSider>
            <MySider />
            <Content style={contentStyle}>
              <Switch>
                <Route path="/hello-world">
                  <HelloWorld />
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
                <Route exact path="/">
                  <HomePage />
                  <QuoteOfTheDay />
                </Route>
              </Switch>
            </Content>
          </Layout>
          <Footer style={footerStyle}>
            <Text italic>©2023 Copyright by LinhNN</Text>
          </Footer>
        </Layout>
      </Space>
    </Router>
  );
}

export default App;