<script lang="ts">
    import type { Speaker } from '$lib/types';
    import { _ } from 'svelte-i18n';
    import SearchBox from '../../../lib/components/SearchBox.svelte'
    import Pager from '../../../lib/components/Pager.svelte'
  import SummaryBox from '../../../lib/components/SummaryBox.svelte'
    export let data;
    let speakers: Speaker[];
    $: speakers = data.jsons;
    $: page = data.page;
    $: speakerCount = data.hits;
</script>

<h1> {$_('speakers')} </h1>
<SearchBox/>

<div class=my-2>{$_('numberOfSpeakers')}: {speakerCount}</div>

<Pager page={page} count={speakerCount} />

<!--TODO: Make a component out of these display boxes so I can handle optional fields more simply-->
{#each speakers as speaker}
    <SummaryBox>
        <h2 slot=title>{speaker.ID.toString() + " " + speaker.FullName + ` (${$_('gender')}: ` + (speaker.Gender ==='fem' ? $_('female') : $_('male')) + ')' }</h2>
        <div slot=body>
        <ul>
            {#if speaker.FirstName}
                <li>{$_('firstSpeaker')}: {speaker.FirstName}</li>
            {/if}
            {#if speaker.LastName}
                <li>{$_('lastName')} : {speaker.LastName}</li>
            {/if}
            {#if speaker.Age}
                <li>{$_('age')} : {speaker.Age}</li>
            {/if}
            {#if speaker.BirthDate}
                <li>{$_('birthDate')}: {speaker.BirthDate}</li>
            {/if}
            {#if speaker.Occupation}
                <li>{$_('occupation')}: {speaker.Occupation}</li>
            {/if}
            {#if speaker.LanguageAbility}
                <li>{$_('languageAbility')}: {speaker.LanguageAbility}</li>
            {/if}
            {#if speaker.Remark}
                <li>{$_('remark')} : {speaker.Remark}</li>
            {/if}
        </ul>
        <a class='text-blue-800' href="tracks?speakerId={speaker.ID}">{$_('tracks')} ({speaker.TrackCount})</a>
        </div>
    </SummaryBox>
{/each}

<Pager page={page} count={speakerCount} />