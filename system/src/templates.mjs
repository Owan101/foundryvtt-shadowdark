export default function() {
	const paths = [
		"systems/shadowdark/templates/actors/player/abilities.hbs",
		"systems/shadowdark/templates/actors/player/abilities/ac.hbs",
		"systems/shadowdark/templates/actors/player/abilities/hp.hbs",
		"systems/shadowdark/templates/actors/player/details.hbs",
	];

	return loadTemplates(paths);
}