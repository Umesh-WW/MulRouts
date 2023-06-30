// component's config object.
const components = {
	admin: {
		component: 'AdminOnly',
		url: '/admin-only',
		title: 'Admin Only',
		tip: 'Admin Only',
		icon: 'menu',
		module: 1
	},
	users: {
		component: 'Users',
		url: '/users',
		title: 'Users',
		tip: 'for all but not public users',
		icon: 'menu',
		module: 1
	},
	dashboard: {
		component: 'Dashboard',
		url: '/dashboard',
		title: 'Dashboard',
		tip: 'for all but not public users',
		icon: 'menu',
		module: 1
	},
	manager: {
		component: 'Manager',
		url: '/manager',
		title: 'Manager',
		tip: 'for management only',
		notAdmin: true,
		icon: 'menu',
		module: 1
	},
	customers: {
		component: 'Customers',
		url: '/customers',
		title: 'Customers',
		tip: 'for customers and managers only',
		notAdmin: true,
		icon: 'menu',
		module: 1
	},
	service1: {
		component: 'Service1',
		url: '/service1',
		tip: 'for manager only',
		title: 'Service1(m)',
		icon: 'menu',
		module: 1
	},
	service2: {
		component: 'Service2',
		url: '/service2',
		title: 'Service2(c)',
		tip: 'for customers only',
		icon: 'menu',
		module: 1
	}
};

// modules for grouping.
const modules = {
	0: {
		title: 'Dashboard',
		icon: 'home',
		isExpendable: true
	}
};

// component's access to roles.
const rolesConfig = {
	admin: {
		routes: [
			...Object.values(components).filter((routes) => {
				return !routes.notAdmin;
			})
		]
	},
	manager: {
		routes: [
			components.dashboard,
			components.manager,
			components.customers,
			components.service1
		]
	},
	customer: {
		routes: [components.users, components.service2]
	},
	common: {
		routes: [
			{
				component: 'Home',
				url: '/',
				title: 'Home',
				icon: 'menu',
				module: 1
			},
			{
				component: 'Profile',
				url: '/profile',
				title: 'Profile',
				icon: 'menu',
				module: 1
			}
		]
	}
};

export { modules, rolesConfig };
