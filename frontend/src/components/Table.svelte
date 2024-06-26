<script>
    export let arr;
</script>
<style>
    table {
        border-collapse: separate;
        border-spacing: 0 0.4rem;
    }
    tbody::before {
        content: "@";
        display: block;
        line-height: 0.6rem;
        text-indent: -99999px;
    }
    tbody tr {
        position: relative;
    }
    tbody tr:hover::after {
        content: "";
        display: block;
        position: absolute;

        top: 0;
        left: -100%;
        z-index: -10;
        width: 500%;
        height: 100%;

        background: linear-gradient(180deg, #F4733C 0%, #8E4323 100%);
    }
</style>
<table class="w-full">
    <thead class="jetbrains__mono">
        <tr class="text-left leading-[1.7rem] cursor-default">
            <th class="w-[34%] font-normal">Project</th>
            <th class="w-[24%] font-normal">Role</th>
            <th class="w-[24%] font-normal">Lang/Framework</th>
            <th class="text-right">Year</th>
        </tr>
    </thead>
    <tbody class="leading-[1.7rem]">
        {#each arr as item}
        <tr class="selection hover:underline mb-[0.4rem]">
            <td>
                <div class="w-full">
                    <a href="{item.link}" target="_blank" class="block w-full">{item.title}</a>
                </div>
            </td>
            <td>
                <div class="w-full">
                    <a href="{item.link}" target="_blank" class="block w-full">{item.role}</a>
                </div>
            </td>
            <td>
                <div class="w-full">
                    <a href="{item.link}" target="_blank" class="block w-full">{item.lang}</a>
                </div>
            </td>
            <td class="text-right">
                <div class="w-full">
                    <a href="{item.link}" target="_blank" class="block w-full">{item.year}</a>
                </div>
            </td>
        </tr>
        {/each}
    </tbody>
</table>
