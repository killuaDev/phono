<script lang='ts'>
    export let data;
  import Callout from '$lib/components/Callout.svelte'
    import NewButton from '$lib/components/NewButton.svelte'
    import { _ } from 'svelte-i18n';

    export let form;
</script>

{#if !data.email}
    <h1>{$_('login')}</h1>
    {#if form?.failed}
        <Callout color=red>
                {$_('wrongUsernamePassword')}
        </Callout>
    {/if}
    <form method='POST' action='?/login' class='flex-row gap-2'>
        <label for=email class='block pb-2'>
            {$_('email')}: <input name='email'>
        </label>
        <label for=password class='block pb-2'>
            {$_('password')}: <input type='password' name='password'/>
        </label>
        <div>
            <NewButton>
                {$_('login')}
            </NewButton>
        </div>
        <a class='text-blue-800' href='https://www.gaois.ie/identity/ga/logainm-phono/'>
            {$_('forgottenPassword')}
        </a>
    </form>
{:else}
    <h2>{$_('loggedInAs')}: {data.email}</h2>

    <form method='POST' action='?/logout'>
        <NewButton>
            {$_('logOut')}
        </NewButton>
    </form>
{/if}
