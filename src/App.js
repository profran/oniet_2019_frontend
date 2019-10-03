import React from 'react'
import AppBar from './component/appBar'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Search from './component/search'
import { Grid } from '@material-ui/core'

function App() {
  return (
    <div>
      <AppBar />
      <Container>
        <Grid container direction="row" justify="flex-start" alignItems="center">
          <Search />
        </Grid>
      </Container>
    </div>
  )
}

export default App
