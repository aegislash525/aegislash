<script>
    import Table from "./Table.svelte";
    export let arr;
</script>
<style>
    .project__zero {
        background: linear-gradient(170.69deg, #F4733C 16.19%, #8E4323 96.24%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
</style>
<div class="my-[3.6rem]">
    <div class="mb-[4.2rem] text-[12.8rem] leading-none">Pr<span class="project__zero">0</span>jects</div>
    <Table {arr} />
</div>
