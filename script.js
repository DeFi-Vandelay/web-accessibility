    
    // Code to toggle dark mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    const rootElement = document.documentElement;
  
    // Function to set the dark mode state
    function setDarkMode(isDark) {
      if (isDark) {
        rootElement.classList.add('dark-mode');
        rootElement.classList.remove('light-mode');
        darkModeToggle.checked = true;
      } else {
        rootElement.classList.remove('dark-mode');
        rootElement.classList.add('light-mode');
        darkModeToggle.checked = false;
      }
      localStorage.setItem('darkMode', isDark);
    }
  
    // Check for saved user preference
    const savedDarkMode = localStorage.getItem('darkMode');
  
    // Set initial state based on saved preference or system preference
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  
    // Listen for toggle changes
    darkModeToggle.addEventListener('change', (e) => {
      setDarkMode(e.target.checked);
    });
  
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (localStorage.getItem('darkMode') === null) {
        setDarkMode(e.matches);
      }
    });