import state from './state.js'
//Estado inicial da aplicação
export function start(minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds

  console.log(state)
}