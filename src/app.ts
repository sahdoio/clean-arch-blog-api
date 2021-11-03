import i18n from 'i18n'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { Express, Request, Response, Router } from 'express'
import { readdirSync } from 'fs'
import bodyParser from 'body-parser'


export class Application {
  public app: Express
  public readonly rootDir: string
  public readonly routesDir: string

  constructor () {
    dotenv.config()
    this.rootDir = __dirname
    this.routesDir = path.join(this.rootDir, 'app', 'main', 'routes')

    this.app = express()
    this.setupMiddlewares()
    this.setupRoutes()

    this.app.get('/', (req: Request, res: Response) => {
      res.send(`API is alive! (${process.env.NODE_ENV})`)
    })
  }

  private setupMiddlewares (): void {
    this.app.use(bodyParser.json())
    this.app.use(cors())
    this.app.use((error, req, res, next) => {
      if (error instanceof SyntaxError) {
        res.status(400).json({
          msg: i18n.__('BAD_REQUEST')
        })
      } else {
        next()
      }
    })
  }

  private setupRoutes (): void {
    const router = Router()
    this.app.use(process.env.ROUTE_ROOT, router)
    readdirSync(this.routesDir).map(async file => {
      if (!file.includes('.test.') && !file.includes('.spec.')) {
        (await import(path.join(this.routesDir, file))).default(router)
      }
    })
  }
}
