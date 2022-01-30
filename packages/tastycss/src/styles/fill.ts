import { parseStyle } from '../utils/styles';

export function fillStyle({ fill }) {
	if (!fill) return '';

	if (fill.startsWith('#')) {
		fill = parseStyle(fill).color || fill;
	}

	// lgtm [js/polynomial-redos]
	const match = fill.match(/var\(--(.+?)-color/);
	let name = '';

	if (match) {
		name = match[1];
	}

	const styles: any[] = [
		{
			'background-color': fill,
			fill,
		},
	];

	if (name) {
		styles.push([
			{
				'$': '>*',
				'--context-fill-color': `var(--${name}-color)`,
				'--context-fill-color-rgb': `var(--${name}-color-rgb)`,
			},
		]);
	}

	return styles;
}

fillStyle.__lookupStyles = ['fill'];
