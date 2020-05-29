//必要库
import React,{useState} from 'react';

//第三方library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// 自身组件
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition';

//加入所有图标
library.add(fas)
const App: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <>
    <div className="App">
      {/* <Button>Hello</Button>
      <Button disabled>Disabled</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Largy Primary
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Small Danger
      </Button>
      <Button
        btnType={ButtonType.Link}
        href={`http://www.google.com`}
        target="_blank"
      >
        Google
      </Button>
      <Button disabled btnType={ButtonType.Link} href={`http://www.google.com`}>
        Google Disabled
      </Button> */}
      <Menu defaultIndex={'0'} menuName={'我的菜单'} onSelect={(index)=>console.log(index)} defaultOpenSubMenus={['2']}> 
        <MenuItem >
          myLink 0
        </MenuItem>
        <MenuItem>
          myLink 1
        </MenuItem>

        <SubMenu title="dropDown">
          <MenuItem>
            Option1
          </MenuItem>
          <MenuItem>
            Option2
          </MenuItem>
          <MenuItem>
            Option3
          </MenuItem>
        </SubMenu>

        <MenuItem >
          myLink 2
        </MenuItem>
      </Menu>
      <Button size='lg' onClick={() => {setShow(!show)}}> Toggle </Button>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-left"
      >
        <div>
          <p>11111111111</p>
          <p>2222222222</p>
          <p>33333333</p>
          <p>444444</p>
        </div>
      </Transition>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-left"
        wrapper
      >
        <Button btnType="primary" size="lg">A Large Button</Button>
      </Transition>
      {/* <Icon icon="arrow-down" theme="primary" size="10x"></Icon> */}
    </div>
    </>
  );
};

export default App;
