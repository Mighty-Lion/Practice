import { useEffect, useState } from 'react';
import { Toggler, TogglerContainer } from '@/components/Toggle/index.styles';
import { useTheme } from '@/hooks/useTheme';
import { themes } from '@/providers/ThemeProvider';

export function Toggle() {
  const { theme, setTheme } = useTheme();
  const [isToggled, setIsToggled] = useState(true);

  useEffect(() => {
    if (theme === 'light') setIsToggled(false);
  }, []);
  const onToggle = () => {
    setIsToggled((prev) => !prev);
    if (theme === themes.light) setTheme(themes.dark);
    if (theme === themes.dark) setTheme(themes.light);
  };

  console.log('theme Toggle', theme);
  return (
    <TogglerContainer htmlFor="toggler">
      <input
        id="toggler"
        type="checkbox"
        onChange={onToggle}
        checked={theme === themes.dark}
        readOnly
      />
      <Toggler isToggled={isToggled} />
    </TogglerContainer>
  );
}
