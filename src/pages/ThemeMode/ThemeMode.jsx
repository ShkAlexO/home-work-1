import React  from 'react';

export default function ThemeMode({defaultValue, onChange}) {

  return (
    <div className='themeMode'>
      <label htmlFor="theme-mode-select">
        <strong>Choose theme mode </strong>
        <select name="theme" id="theme-mode-select" defaultValue={defaultValue} onChange={onChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </div>
  )
} 
