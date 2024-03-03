import * as Icons from '@/public/icons';
import * as Covers from '@/public/covers';

export function getImage(url: string): string {
	switch (url) {
		case 'angular':
			return Icons.angular.src;
		case 'c':
			return Icons.c.src;
		case 'csharp':
			return Icons.csharp.src;
		case 'eclipse':
			return Icons.eclipse.src;
		case 'firebase':
			return Icons.firebase.src;
		case 'gcp':
			return Icons.gcp.src;
		case 'git':
			return Icons.git.src;
		case 'github':
			return Icons.github.src;
		case 'gradle':
			return Icons.gradle.src;
		case 'intellij':
			return Icons.intellij.src;
		case 'java':
			return Icons.java.src;
		case 'mysql':
			return Icons.mysql.src;
		case 'nextjs':
			return Icons.nextjs.src;
		case 'react':
			return Icons.react.src;
		case 'springboot':
			return Icons.springboot.src;
		case 'tailwind':
			return Icons.tailwind.src;
		case 'terraform':
			return Icons.terraform.src;
		case 'typescript':
			return Icons.typescript.src;
		case 'vscode':
			return Icons.vscode.src;
		default:
			return '';
	}
}

export function getProjectImage(url: string): string {
	switch (url) {
		case 'portfolio':
			return Covers.portfolio.src;
		case 'spotify':
			return Covers.spotify.src;
		case 'tasks':
			return Covers.tasks.src;
		case 'discord':
			return Covers.discord.src;
		default:
			return '';
	}
}
