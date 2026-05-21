import { restaurant } from './restaurant';
import { menu } from './menu';
import { theme } from './theme';

describe('Configuration Files', () => {

  describe('restaurant.js', () => {
    test('has required fields', () => {
      expect(restaurant.name).toBeDefined();
      expect(restaurant.tagline).toBeDefined();
      expect(restaurant.address).toBeDefined();
      expect(restaurant.contact).toBeDefined();
      expect(restaurant.hours).toBeDefined();
    });

    test('has all language translations for tagline', () => {
      expect(restaurant.tagline.en).toBeDefined();
      expect(restaurant.tagline.cs).toBeDefined();
      expect(restaurant.tagline.it).toBeDefined();
    });

    test('has valid contact information', () => {
      expect(restaurant.contact.phone).toBeDefined();
      expect(restaurant.contact.email).toBeDefined();
    });

    test('has valid address', () => {
      expect(restaurant.address.street).toBeDefined();
      expect(restaurant.address.city).toBeDefined();
    });

    test('hours object exists', () => {
      expect(restaurant.hours).toBeDefined();
      expect(typeof restaurant.hours).toBe('object');
    });
  });

  describe('menu.js', () => {
    test('has categories array', () => {
      expect(Array.isArray(menu.categories)).toBe(true);
      expect(menu.categories.length).toBeGreaterThan(0);
    });

    test('has currency settings', () => {
      expect(menu.currency).toBeDefined();
      expect(menu.currency.code).toBeDefined();
      expect(menu.currency.symbol).toBeDefined();
    });

    test('categories have required fields', () => {
      menu.categories.forEach(category => {
        expect(category.id).toBeDefined();
        expect(category.name).toBeDefined();
        expect(Array.isArray(category.items)).toBe(true);
      });
    });

    test('items nested in categories have required fields', () => {
      menu.categories.forEach(category => {
        category.items.forEach(item => {
          expect(item.id).toBeDefined();
          expect(item.name).toBeDefined();
          expect(item.price).toBeDefined();
          expect(item.description).toBeDefined();
        });
      });
    });

    test('items have translations', () => {
      menu.categories.forEach(category => {
        category.items.forEach(item => {
          expect(item.name.cs).toBeDefined();
          expect(item.name.en).toBeDefined();
          expect(item.name.it).toBeDefined();
        });
      });
    });
  });

  describe('theme.js', () => {
    test('has colors defined', () => {
      expect(theme.colors).toBeDefined();
    });

    test('has primary color', () => {
      expect(theme.colors.primary).toBeDefined();
    });
  });
});