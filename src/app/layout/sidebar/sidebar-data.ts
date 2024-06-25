import { NavItem } from "./nav-item-data";

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
    navIcon: 'bi bi-house',
    children: [
      {
        displayName: 'Dashboard',
        iconName: 'bi bi-columns-gap',
        route: '/dashboard',
      }
    ]
  },
  {
    navCap: 'Inventory',
    navIcon: 'bi bi-box-seam',
    children: [
      {
        displayName: 'Products',
        iconName: 'bi bi-box',
        route: '/ui-components/badge',
      },
      {
        displayName: 'Reports',
        iconName: 'bi bi-clipboard-data',
        route: '/ui-components/dialog',
      },
      {
        displayName: 'Category',
        iconName: 'bi bi-boxes',
        route: '/ui-components/divider',
      },
      {
        displayName: 'Sub-Category',
        iconName: 'bi bi-box2',
        route: '/ui-components/divider',
      },
      {
        displayName: 'Brands',
        iconName: 'bi bi-tags',
        route: '/ui-components/divider',
      },
    ]
  },
  {
    navCap: 'Purchases',
    navIcon: 'bi bi-cart-plus',
    children: [
      {
        displayName: 'Purchase',
        iconName: 'bi bi-cart-plus',
        route: '/ui-components/chips',
      }
    ]
  },
  {
    navCap: 'Sales',
    navIcon: 'bi bi-cart',
    children: [
      {
        displayName: 'Sales',
        iconName: 'bi bi-cart',
        route: '/ui-components/lists',
      },
    ]
  },
  {
    navCap: 'Stock',
    navIcon: 'bi bi-box-seam',
    children: [
      {
        displayName: 'Manage Stocks',
        iconName: 'bi bi-box-seam',
        route: '/ui-components/lists',
      },
      {
        displayName: 'Sales',
        iconName: 'bi bi-cart-dash',
        route: '/ui-components/lists',
      },
    ]
  },
  {
    navCap: 'Customers/Vendors',
    navIcon: 'bi bi-people',
    children: [
      {
        displayName: 'Customers',
        iconName: 'bi bi-people',
        route: '/ui-components/menu',
      },
      {
        displayName: 'Suppliers/Vendors',
        iconName: 'bi bi-person-down',
        route: '/ui-components/divider',
      }
    ]
  },
  {
    navCap: 'Reports',
    navIcon: 'bi bi-file-earmark-bar-graph',
    children: [
      {
        displayName: 'Purchase Reports',
        iconName: 'bi bi-file-earmark-bar-graph',
        route: '/ui-components/expansion',
      },
      {
        displayName: 'Sales Reports',
        iconName: 'bi bi-bar-chart-line',
        route: '/ui-components/divider',
      },
      {
        displayName: 'Customers Due Reports',
        iconName: 'bi bi-people',
        route: '/ui-components/menu',
      }
    ]
  },
  {
    navCap: 'Auth',
    navIcon: 'bi bi-box-arrow-in-right',
    children: [
      {
        displayName: 'Login',
        iconName: 'bi bi-box-arrow-in-right',
        route: '/authentication/login',
      },
      {
        displayName: 'Register',
        iconName: 'bi-person-plus',
        route: '/authentication/register',
      }
    ]
  },
  {
    navCap: 'Settings',
    navIcon: 'bi bi-gear',
    children: [
      {
        displayName: 'General Settings',
        iconName: 'bi bi-gear',
        route: '/ui-components/tooltips',
      },
      {
        displayName: 'Logout',
        iconName: 'bi bi-box-arrow-right',
        route: '/ui-components/tooltips',
      },
    ]
  }
];
