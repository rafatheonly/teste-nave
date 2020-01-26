import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Conecta from '../constants/Conecta'


export default class Detalhes extends Component {

    state = {
        id: 0,
        name: '',
        email: '',
        surge: '',
        date: ''
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        const user = await Conecta.get(`/users/${params.id}`)
        this.setState(user.data)
    }

    render() {
        return (
            <div className="row spacing">
                <div className="col s12">
                    <div className="card-panel">
                        <h5 className="grey-text"><strong>{this.state.name}</strong></h5>
                        <p><strong>Vaga:</strong> {this.state.surge}</p>
                        <p><strong>Data de nascimento:</strong> {this.state.date}</p>
                        <p><strong>E-mail:</strong> {this.state.email}</p>
                        <p>
                            <Link to="/users" className="btn waves-effect waves-light button-space">VOLTAR</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
