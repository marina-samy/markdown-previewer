import './App.css';
import React, { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import Docs from './components/Docs/Docs';

const App = () => {
  const [code, setCode] = useLocalStorage('markdown', '## Hello');
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>')
  const [activeTab, setActiveTab] = useState('editor');
  const [hide, hidePreview] = useState(true)



  const openMD = () => {
    setActiveTab('editor');
  };
  
  const openPreview = () => {
    setActiveTab('preview');
  };


  const handleChange = (e) => {
    setCode(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('markdown', code);
  }, [code]);

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className={activeTab === 'editor' ? 'active' : ''}>MarkDown</button>
          <button onClick={openPreview} className={activeTab === 'preview' ? 'active' : ''}>Preview</button>
          <button onClick={() => setActiveTab('docs')} className={activeTab === 'docs' ? 'active' : ''}>Docs</button>
        </div>
        {activeTab === 'editor' && (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        )}
        {activeTab === 'preview' && (
          <div>
            <textarea value={compiled} />
          </div>
        )}
        {activeTab === 'docs' && <Docs />}
      </div>
    </>
  );
}


export default App;
