import React, { useState, useEffect, Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Grid } from '@material-ui/core'
import TablaData from './tableData'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export default class search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userId: "",
      query: "",
      option: "",
      data: [],
      dataQuery: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmitQuery = this.handleSubmitQuery.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`http://192.168.43.104:3002/data/?userId=${this.state.userId}`, {
      method: 'GET',
    }).then(response => response.json()).then(response => this.setState({
      data: response
    }));
  }

  handleSubmitQuery(event) {
    event.preventDefault();
    this.setState({
      dataQuery: []
    })

    fetch(`http://192.168.43.104:3002/data/cruces/?userId=${this.state.userId}&${this.state.option}=${this.state.query}`, {
      method: 'GET',
    }).then(response => response.json()).then(response => this.setState({
      dataQuery: response
    }));
  }

  render() {
    return (
      <>
        {console.log(this.state.data)
        }
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit} >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <TextField
              id="user_id"
              name="userId"
              label="Usuario"
              margin="normal"
              value={this.state.userId}
              onChange={
                (event) => {
                  this.setState({
                    userId: event.target.value
                  })
                }
              }
            />
            <Button variant="contained" type='submit'>
              Buscar
            </Button>
          </Grid>
        </form >
        <TablaData data={this.state.data} />

        <div>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmitQuery} >
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item xs={3}>
                <TextField
                  id="user_id"
                  name="userId"
                  label="Usuario"
                  margin="normal"
                  value={this.state.userId}
                  onChange={
                    (event) => {
                      this.setState({
                        userId: event.target.value
                      })
                    }
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  name="query"
                  label="Query"
                  margin="normal"
                  value={this.state.query}
                  onChange={
                    (event) => {
                      this.setState({
                        query: event.target.value
                      })
                    }
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <Select
                  style={{ width: '150px' }}
                  value={this.state.option}
                  onChange={
                    (event) => {
                      this.setState({
                        option: event.target.value
                      })
                    }
                  }
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                >
                  <MenuItem value={'ip'}>IP</MenuItem>
                  <MenuItem value={'device_id'}>Device</MenuItem>
                </Select>
              </Grid>
              <Button variant="contained" type='submit'>
                Buscar cruce
            </Button>
            </Grid>
          </form >
          <TablaData data={this.state.dataQuery} />
        </div>
      </>
    )
  }
}
