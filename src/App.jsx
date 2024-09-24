import './App.css'
import Heading from './components/Heading';
import Paragraf from './components/Paragraf';
import Link from './components/Link';

function App() {
  const name = 'Brad';
  const isAdult = true;
  return (
    <>
      <h1 className='heading'>{isAdult?'Hello':'Hi'}, {name}!</h1>
      <Heading titleContent="something text" username={name}/>
      <Paragraf content="content fo paragraf" />
      <Heading titleContent="New title" />
      <Link href="https://google.com" content="click now"/>
    </>
  )
}

export default App;
