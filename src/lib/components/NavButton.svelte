<script lang="ts">
    import Icon from "./Icon.svelte";
    import { page } from "$app/stores";
    import { _ } from "svelte-i18n"
    import { resolvePath } from "@sveltejs/kit";

    export let isCompact: boolean;
    export let link: string;
    export let text = '';
    export let icon: string;

</script>

<a href={resolvePath(`/[[language]]/${link}`, $page.params)} 
    class='{isCompact ? 'flex-row' : 'flex'} justify-between {isCompact ? '' : 'hover:bg-gray-100 p-2 rounded-full'} 
    items-center text-2xl {$page.url.pathname.includes(link) ? 'text-blue-800 font-bold' : ''} md:text-xl lg:p-4 text-center'>
    <Icon name={icon}/>
    <div class={isCompact ? 'text-sm' : ''}>
        {text || $_(link)}
    </div>
</a>