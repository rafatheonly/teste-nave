import React, { Component } from 'react'
import M from 'materialize-css'
import Conecta from '../constants/Conecta'


export default class User extends Component {

  state = {
    name: '',
    surge: '',
    date: '',
    email: '',
    errorName: false,
    errorSurge: false,
    errorDate: false,
    errorEmail: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount() {
    this.initialState = this.state
  }

  limpar = () => {
    this.setState(this.initialState)
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    let validations = true;

    const novo = {
      name: this.state.name,
      surge: this.state.surge,
      date: this.state.date,
      email: this.state.email
    }

    //ALGUMAS VALIDACOES, PODERIAM TER AQUI OUTRAS VALIDACOES, BEM COMO O TAMANHO MINIMO/MAXIMO DO NOME!
    if (novo.name === '') {
      this.setState({ errorName: true })
      validations = false
    } else {
      this.setState({ errorName: false })
      validations = true
    } if (novo.surge === '') {
      this.setState({ errorSurge: true })
      validations = false
    } else {
      this.setState({ errorSurge: false })
      validations = true
    } if (novo.date === '') {
      this.setState({ errorDate: true })
      validations = false
    } else {
      this.setState({ errorDate: false })
      validations = true
    } if (novo.email === '') {
      this.setState({ errorEmail: true })
      validations = false
    } else {
      this.setState({ errorEmail: false })
      validations = true
    }

    //VERIFICA SE TODOS OS CAMPOS ESTAO PREENCHIDOS/CORRETOS DEPENDENDO DAS VALIDACOES APLICADAS!
    if (validations === false) {
      return
    }

    //EXECUTA O INSERT NO ARQUIVO db.json
    try {
      const user = await Conecta.post('/users', novo)
      this.limpar()
      //this.setState({ redirect: true })
      M.toast({ html: `${user.data.name} cadastrado(a) com sucesso!` })
    } catch (erro) {
      alert('Ops! Algo deu errado: ' + erro)
    }
  }

  render() {
    return (
      <div className="row spacing">
        <div className="col s12">
          <div className="card-panel">
            <h5 className="grey-text"><strong>Criar usuário</strong></h5>
            <form className="panel-user" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input id="name" name="name" type="text" className={this.state.errorName ? "error-input" : ''}
                    onChange={this.handleChange} value={this.state.name} />
                  <label for="name" className={this.state.errorName ? "red-text" : ''}>Nome</label>
                  {this.state.errorName ? <span className="helper-text red-text">O nome não pode ser vazio!</span> : ''}
                </div>
                <div className="input-field col s12">
                  <input id="surge" name="surge" type="text" className={this.state.errorSurge ? "error-input" : ''}
                    onChange={this.handleChange} value={this.state.surge} />
                  <label for="surge" className={this.state.errorSurge ? "red-text" : ''}>Vaga</label>
                  {this.state.errorSurge ? <span className="helper-text red-text">A vaga não pode ser vazia!</span> : ''}
                </div>
                <div className="input-field col s12">
                  <input id="date" name="date" type="text" className={this.state.errorDate ? "error-input" : ''}
                    onChange={this.handleChange} value={this.state.date} />
                  <label for="date" className={this.state.errorDate ? "red-text" : ''}>Data de nascimento</label>
                  {this.state.errorDate ? <span className="helper-text red-text">A data de nasciemento não pode ser vazia!</span> : ''}
                </div>
                <div className="input-field col s12">
                  <input id="email" name="email" type="email" className={this.state.errorEmail ? "error-input" : ''}
                    onChange={this.handleChange} value={this.state.email} email />
                  <label for="email" className={this.state.errorEmail ? "red-text" : ''}>E-mail</label>
                  {this.state.errorEmail ? <span className="helper-text red-text">O e-mail não pode ser vazio!</span> : ''}
                </div>
                <div className="input-field col s12">
                  <button type="submit" className="btn waves-effect waves-light col s12">ENVIAR</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
