const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Br_63YBJ.js","app":"_app/immutable/entry/app.Bz1pjerx.js","imports":["_app/immutable/entry/start.Br_63YBJ.js","_app/immutable/chunks/scheduler.C55nVr2J.js","_app/immutable/chunks/singletons.ChUINmnO.js","_app/immutable/entry/app.Bz1pjerx.js","_app/immutable/chunks/scheduler.C55nVr2J.js","_app/immutable/chunks/index.CVS-8Kt7.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Hv-Ag_2T.js')),
			__memo(() => import('./chunks/1-DhsS6itJ.js')),
			__memo(() => import('./chunks/2-CyIDBLnf.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
