import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import WidgetGrid from './components/WidgetGrid';
import AddWidgetModal from './components/AddWidgetModal';

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    ...(mode === 'light' ? {
      primary: {
        main: '#3949ab',
      },
      secondary: {
        main: '#5c6bc0',
      },
      background: {
        default: '#f5f6fa',
        paper: '#ffffff',
      },
      text: {
        primary: '#2c3e50',
        secondary: '#4a5568',
      },
    } : {
      primary: {
        main: '#3949ab',
      },
      secondary: {
        main: '#5c6bc0',
      },
      background: {
        default: '#0a0c10',
        paper: '#161b22',
      },
      text: {
        primary: '#e1e4e8',
        secondary: '#8b949e',
      },
    }),
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      background: 'linear-gradient(45deg, #3949ab, #5c6bc0)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      letterSpacing: '-0.01em',
    },
    h3: {
      letterSpacing: '-0.01em',
    },
    body1: {
      letterSpacing: '-0.01em',
    },
    body2: {
      letterSpacing: '-0.01em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: mode === 'light' ? '#f8f9fa' : '#21262d',
          },
        },
      },
    },
  },
});

const defaultMenus = [
  {
    id: 1,
    name: 'Général',
    widgets: [
      { id: 1, title: 'Google', url: 'https://www.google.com', icon: '🔍', isDefault: true },
      { id: 2, title: 'GitHub', url: 'https://github.com', icon: '💻', isDefault: true },
    ]
  },
  {
    id: 2,
    name: 'Médias',
    widgets: [
      { id: 3, title: 'YouTube', url: 'https://www.youtube.com', icon: '▶️', isDefault: true },
    ]
  }
];

function App() {
  const [mode, setMode] = useState('dark');
  const theme = React.useMemo(() => getTheme(mode), [mode]);
  const [menus, setMenus] = useState(defaultMenus);
  const [showAddMenuForm, setShowAddMenuForm] = useState(false);
  const [newMenuName, setNewMenuName] = useState('');
  const [modalState, setModalState] = useState({
    isOpen: false,
    menuId: null,
    menuName: ''
  });

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    document.body.classList.toggle('light-mode');
  };

  const handleAddWidget = (newWidget, menuId) => {
    setMenus(menus.map(menu => {
      if (menu.id === menuId) {
        return {
          ...menu,
          widgets: [...menu.widgets, { ...newWidget, id: Date.now() }]
        };
      }
      return menu;
    }));
  };

  const handleDeleteWidget = (widgetId, menuId) => {
    setMenus(menus.map(menu => {
      if (menu.id === menuId) {
        return {
          ...menu,
          widgets: menu.widgets.filter(widget => 
            widget.id !== widgetId || widget.isDefault
          )
        };
      }
      return menu;
    }));
  };

  const handleAddMenu = (e) => {
    e.preventDefault();
    if (newMenuName.trim()) {
      setMenus([...menus, {
        id: Date.now(),
        name: newMenuName.trim(),
        widgets: []
      }]);
      setNewMenuName('');
      setShowAddMenuForm(false);
    }
  };

  const openModal = (menuId, menuName) => {
    setModalState({
      isOpen: true,
      menuId,
      menuName
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      menuId: null,
      menuName: ''
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="header">
        <div className="header-content">
          <h1>Dashboard des Widgets</h1>
          <IconButton 
            onClick={toggleColorMode} 
            color="inherit"
            className="theme-toggle"
            aria-label="toggle theme"
          >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
      </div>
      <div className="container">
        {showAddMenuForm ? (
          <form onSubmit={handleAddMenu} className="add-menu-form">
            <input
              type="text"
              value={newMenuName}
              onChange={(e) => setNewMenuName(e.target.value)}
              placeholder="Nom du menu"
              className="menu-input"
            />
            <button type="submit" className="menu-submit">
              ✓
            </button>
            <button 
              type="button" 
              className="menu-cancel"
              onClick={() => {
                setShowAddMenuForm(false);
                setNewMenuName('');
              }}
            >
              ×
            </button>
          </form>
        ) : (
          <button 
            className="menu-button add-menu"
            onClick={() => setShowAddMenuForm(true)}
          >
            + Nouveau menu
          </button>
        )}
        
        {menus.map(menu => (
          <div key={menu.id} className="menu-section">
            <h2 className="menu-title">{menu.name}</h2>
            <div className="widget-grid">
              <WidgetGrid 
                widgets={menu.widgets} 
                onDeleteWidget={(widgetId) => handleDeleteWidget(widgetId, menu.id)}
              />
              <div 
                className="widget add-widget-button" 
                onClick={() => openModal(menu.id, menu.name)}
              >
                <div className="widget-content">
                  <div className="widget-icon">➕</div>
                  <h3 className="widget-title">Ajouter un widget</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Dashboard des Widgets. Tous droits réservés.</p>
      </footer>
      <AddWidgetModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        onAddWidget={(widget) => handleAddWidget(widget, modalState.menuId)}
        menuName={modalState.menuName}
      />
    </ThemeProvider>
  );
}

export default App; 