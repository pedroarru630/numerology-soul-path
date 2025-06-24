
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add basic inline styles for testing
const basicStyles = `
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  * {
    box-sizing: border-box;
  }
`;

// Inject basic styles
const styleElement = document.createElement('style');
styleElement.textContent = basicStyles;
document.head.appendChild(styleElement);

createRoot(document.getElementById("root")!).render(<App />);
