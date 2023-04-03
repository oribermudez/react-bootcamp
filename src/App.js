import logo from './logo.svg';
import './App.css';

function App() {
  const menuBar = [
    {
      name: {
        text: 'Why Dropbox?',
        url: 'https://www.dropbox.com/'}
    },
    {
      name:  {
        text: 'Products',
        url: 'https://www.dropbox.com/'}
    },
    {
      name: {
        text: 'Solution',
        url: 'https://www.dropbox.com/'}
    },
    {
      name: {
        text: 'Pricing',
        url: 'https://www.dropbox.com/'}
    }
  ];

  return (
    <div className="App">
      {menuBar.map(menu => {
        return (
          <div>
            <a href={menu.name.url}>{menu.name.text}</a>
          </div>
        )
      })}
    </div>
  );
}

export default App;
