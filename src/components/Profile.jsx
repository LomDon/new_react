import React from 'react';
export class Profile extends React.Component{
    constructor() {
        super();
        this.state = {
            userName: "empty"
        }
    }
    componentDidMount(){
        fetch("http://osum2m04.beget.tech/getUserJSON")
            .then(response=>response.text())
            .then(info=>{
                this.setState({
                    userName: info
                })
            });
    }
    render(){
        console.log("Шаг 1 компонента отрисовывается");
        return <div className="row">
            <div className="col-2">
                <img width="100%" src="https://sunmarsol.ru/wp-content/uploads/2019/12/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%BC%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA.jpg" alt=""/>
            </div>
            <div className="col-10">
                <h1>{this.state.userName}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid autem dolore ea, fuga, fugiat ipsa nemo nobis obcaecati quasi quibusdam quisquam quod, ratione reiciendis sunt unde ut velit vero.</p>
            </div>
        </div>
    }
    }