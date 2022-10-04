import { app } from "./app"
import { ping } from './endpoints/ping'

app.get("/ping", ping)




