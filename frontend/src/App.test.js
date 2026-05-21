/**
 * Basic App Test
 *
 * Tests that verify the app can load its configuration.
 * Full component tests require more setup (routing, providers, etc.)
 */

// Test that configuration files load without errors
import { restaurant } from './config/restaurant';
import { menu } from './config/menu';
import { theme } from './config/theme';

describe('App Configuration', () => {
  test('restaurant config loads', () => {
    expect(restaurant.name).toBeDefined();
  });

  test('menu config loads', () => {
    expect(menu.categories).toBeDefined();
  });

  test('theme config loads', () => {
    expect(theme.colors).toBeDefined();
  });
});