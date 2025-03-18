import React, { useState, useEffect } from 'react';

const Themetoggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  // Hàm để cập nhật theme trên HTML element
  const updateTheme = (theme: 'light' | 'dark' | 'system') => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // Chế độ theo hệ thống
      document.documentElement.classList.remove('dark');
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add('dark');
      }
    }
  };

  // Cập nhật theme từ localStorage hoặc sử dụng hệ thống theme mặc định
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      updateTheme(savedTheme);
    } else {
      setTheme('system');
      updateTheme('system');
    }

    // Theo dõi sự thay đổi của hệ thống theme (chế độ tối/ánh sáng)
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        updateTheme('system');
      }
    };
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  // Hàm để xử lý khi người dùng chọn theme
  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    updateTheme(newTheme);
  };

  return (
    <div className="bg-neutral-400 dark:bg-neutral-800">
        <div className="space-x-4">
          <button
            onClick={() => handleThemeChange('light')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Light Mode
          </button>
          <button
            onClick={() => handleThemeChange('dark')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Dark Mode
          </button>
        </div>
      </div>
  );
};

export default Themetoggle;

