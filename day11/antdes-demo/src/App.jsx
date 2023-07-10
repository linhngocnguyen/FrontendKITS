import { Layout, Space, Typography, Menu } from 'antd';
import { AppstoreOutlined, StarOutlined, BorderOutlined, ClockCircleOutlined, CalculatorOutlined, ArrowsAltOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import ChessBoard from './components/chess/ChessBoard';
import Calculator from './components/calculator/Calculator'
import Pomodoro from './components/pomodoro/Pomodoro';
import UnitConverter from './components/unit-converter/UnitConverter';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;

const headerStyle = {
  height: 64,
  lineHeight: '64px',
  backgroundColor: '#2a2b36',
  width: '100%',
  fontSize: '10px',
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
                <Route exact path="/">
                  <HomePage />
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