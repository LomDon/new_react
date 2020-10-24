import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";

const Menu = ()=>{
  return <ul>
    <li><NavLink className="nav-link" to="/profile">Профиль</NavLink></li>
    <li><NavLink className="nav-link" to="/settings">Настройки</NavLink></li>
    <li><NavLink className="nav-link" to="/users">Пользователи</NavLink></li>
  </ul>
}

const Profile = ()=>{
    return <div className="row">
        <div className="col-2">
            <img width="100%" src="https://sunmarsol.ru/wp-content/uploads/2019/12/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%BC%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA.jpg" alt=""/>
        </div>
        <div className="col-10">
            <h1>Иван Иванов</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid autem dolore ea, fuga, fugiat ipsa nemo nobis obcaecati quasi quibusdam quisquam quod, ratione reiciendis sunt unde ut velit vero.</p>
        </div>
    </div>
}

const Settings = ()=>{
    return <div>
        <div>
            <h1>Имя: Иван</h1>
        </div>
        <div>
            <h1>Фамилия: Иванов </h1>
        </div>
    </div>
}
const Users = ()=>{
    return <div>
        <div><h1>Список пользователей:</h1></div>
        <div><h1>1) Иван Иванов</h1></div>
    </div>
}
function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
          <div className="row">
            <div className="col-3">
                <Menu/>
            </div>
            <div className="col-9">
                <Route path="/profile" render={()=>{return <Profile/>}}/>
                <Route path="/settings" render={()=>{return <Settings/>}}/>
                <Route path="/users" render={()=>{return <Users/>}}/>
            </div>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
