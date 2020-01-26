import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Conecta from '../constants/Conecta'
import UserItem from '../constants/UserItem'

export default class Users extends Component {

    state = {
        users: []
    }

    async componentDidMount() {
        const lista = await Conecta.get('/users')
        this.setState({ users: lista.data })
    }

    render() {
        return (
            <>
                {this.state.users.length < 1 ?
                    <div className="center-align">
                        <br />
                        <Loader
                            type="Oval"
                            color="#cecece"
                            height={50}
                            width={50}
                            timeout={3000}
                        />
                    </div> :
                    <div className="row spacing">
                        <div className="col s6">
                            <h4><strong>Usuários</strong></h4>
                        </div>
                        <div className="col s6 right-align btn-criar">
                            <Link to="/user" className="btn waves-effect waves-light button-space">CRIAR</Link>
                        </div>
                        <div className="col s12">
                            <table className="responsive-table tbl">
                                <thead>
                                    <tr>
                                        <th className="center-align grey-text">ID</th>
                                        <th className="grey-text">Nome</th>
                                        <th className="grey-text">Vaga</th>
                                        <th className="grey-text">Data de nascimento</th>
                                        <th className="grey-text">E-mail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.users.map(user => (
                                        <UserItem key={user.id}
                                            id={user.id}
                                            name={user.name}
                                            email={user.email}
                                            surge={user.surge}
                                            date={user.date}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </>
        )
    }
}
