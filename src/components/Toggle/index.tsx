import { ToggleContainer, Toggle } from '@/components/Toggle/index.styles';
import { useTheme } from '@/hooks/useTheme';
import { themes } from '@/providers/ThemeProvider';

export function Toggle() {
  const { theme, setTheme } = useTheme();

  return (
    <ToggleContainer>
      <Toggle
        onChange={() => {
          if (theme === themes.light) setTheme(themes.dark);
          if (theme === themes.dark) setTheme(themes.light);
        }}
        value={theme === themes.dark}
      />
    </ToggleContainer>
  );
}
