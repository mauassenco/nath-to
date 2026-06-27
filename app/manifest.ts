import type { MetadataRoute } from 'next'
import { BRAND } from '@/lib/brand'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Nathália Catharino Zaccaria — Terapeuta Ocupacional',
		short_name: 'Nathália Catharino',
		icons: [
			{
				src: '/web-app-manifest-192x192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'maskable',
			},
			{
				src: '/web-app-manifest-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable',
			},
		],
		theme_color: BRAND.primaryColor,
		background_color: '#f8f6f2',
		display: 'standalone',
	}
}
