import { createSignal } from 'solid-js'
import './App.css'
import { JSX } from 'solid-js/h/jsx-runtime'

function App() {
  const [title, setTitle] = createSignal('')
  const [message, setMessage] = createSignal('')

  const sendTitle : JSX.EventHandler<HTMLFormElement, Event>  = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/param',{
      method: 'post',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({title:title()})
    })
  }

  const sendMessage: JSX.EventHandler<HTMLFormElement, Event>  = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/param',{
      method: 'post',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({message: message()})
    })
  }

  const sendEvent = (type:string) => {
    fetch('http://localhost:8080/event',{
      method: 'post',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({type: type})
    })
  }

  return (
    <>
      <form onsubmit={sendTitle} style={"text-align: left"}>
        <label for='title' style="display:block">title</label>
        <input id="title" type='text' onInput={(e)=> setTitle(e.target.value)} ></input>
        <button type='submit'>submit</button>
      </form>
      <form onsubmit={sendMessage} style={"text-align: left"}>
        <label for="message" style="display:block">message</label>
        <input id="message" type='text' onInput={(e) => setMessage(e.target.value)}></input>
        <button type='submit'>submit</button>
      </form>
      <button type="button" onClick={()=> sendEvent('kusa')}>草ボタン</button>
      <button type="button" onClick={()=> sendEvent('uooo')}>うおおおお</button>
    </>
  )
}

export default App
