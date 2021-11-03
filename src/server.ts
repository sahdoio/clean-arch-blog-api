import { Application } from './app'


const application = new Application()
application.app.listen(process.env.APP_PORT, () => {
  console.log('Running on port %s', process.env.APP_PORT)
})

export default application
