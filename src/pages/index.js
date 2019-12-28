import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    <h1>¡Hola!</h1>
    <p>Bienvenido a tienda-de-barrio.com! Aqui puedes promocionar gratis tu tienda de barrio¡</p>
    <p>Crea una nueva cuenta: <Link to="/app/signup">Registrar</Link></p>
    <Link to="/app/login">Entrar</Link><br />
    <Link to="/app/home">Inicio</Link><br />
    <Link to="/app/profile">Tu perfil</Link>
  </Layout>
)

export default IndexPage
