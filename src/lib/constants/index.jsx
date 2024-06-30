import {
	HiOutlineViewGrid,
	HiOutlineUserAdd,
	HiCloudUpload,
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
		key: ' Users',
		label: 'Users',
		path: '/products',
		icon: <HiOutlineUsers />
	},
	{
		key: 'Addusers',
		label: 'Add users',
		path: '/Addusers',
		icon:  <HiOutlineUserAdd />
	},
	{
		key: 'AddCategory',
		label: 'Add Category',
		path: '/addCategory',
		icon:  <HiOutlineDocumentText />
	},
	{
		key: 'Addpost',
		label: 'Add post',
		path: '/Addposts',
		icon: <HiCloudUpload />
	},
	{
		key: 'Add User',
		label: 'Add User	',
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
