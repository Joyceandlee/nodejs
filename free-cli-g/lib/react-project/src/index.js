import dva from 'dva'
import App from './containers/App'
import index from './model/index'

const createBrowserHistory=require('history').createBrowserHistory;

const app=dva({
    history:createBrowserHistory()
})

app.router(App)

app.model(index)

app.start("#root")