import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiMail,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiPhone,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Add Post',
		label: 'Add Post',
		path: '/products',
		icon: <HiOutlineCube />
	},
	{
		key: 'News Letters',
		label: 'News Letters',
		path: '/orders',
		icon: <HiMail />
	},
	{
		key: 'Roles & Permissions',
		label: 'Roles & Permissions',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'contacts',
		label: 'Contacts',
		path: '/Contacts',
		icon: <HiPhone />

	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
