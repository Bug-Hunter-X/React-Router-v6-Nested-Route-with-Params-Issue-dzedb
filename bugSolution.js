```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/*" element={<Users/>}/>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div> }
function About() { return <div>About</div> }

function Users(){
  return (
    <Routes>
        <Route path="/:id" element={<User/>}/>
    </Routes>
  )
}

function User() { return <div>User</div> }

export default App;
```