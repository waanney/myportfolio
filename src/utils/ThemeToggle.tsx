import React, { useState, useEffect } from 'react';
import sun from "../assets/sun-fill.svg"
import moon from "../assets/moon-fill.svg"
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
  const handleToggleTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; // Toggle between 'light' and 'dark'
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    updateTheme(newTheme);
  };

  return (
    <div className="bg-neutral-400 dark:bg-neutral-800">
      <button
        onClick={() => handleToggleTheme()}
        className=" px-[5px] py-[5px] cursor-pointer rounded-md bg-neutral-500 dark:bg-neutral-900"
      >
        <img
          className="h-[30px] w-[30px]  "
          src={localStorage.getItem('theme') === 'dark' ? sun : moon}
          alt="Toggle Icons"
        />
      </button>
    </div>
  );
};

export default Themetoggle;

