import express from 'express'
import React from 'react'
import MyComponent from './MyComponent.js'
import { render, template } from 'rapscallion'

var server = express()

server.get('/', (req, res) => {
  
  const app = render(
    <MyComponent name={'world!'} />
  )
  
  const responseRenderer = template`
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body><div id="root">${app}</div></body>
    </html>
  `
  responseRenderer.toStream().pipe(res)
})

server.listen(3000, () => console.log('Server listening on port 3000!'))
