import { c as create_ssr_component, e as escape } from './ssr-bo663U3E.js';

const css = {
  code: "main.svelte-mnd5uq{display:flex;flex-direction:column;min-height:100vh}header.svelte-mnd5uq{color:white;padding:1rem}section.svelte-mnd5uq{flex:1;padding:1rem}footer.svelte-mnd5uq{color:white;text-align:center;padding:1rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Kingdom Craft" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<main class="svelte-mnd5uq"><header class="svelte-mnd5uq"><h1>${escape(title)}</h1></header> <section class="container svelte-mnd5uq">${slots.default ? slots.default({}) : ``}</section> <footer class="svelte-mnd5uq" data-svelte-h="svelte-rjjlio"></footer> </main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-C8aXdd8n.js.map
