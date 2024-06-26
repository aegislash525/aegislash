<script>
    import { onMount, onDestroy } from 'svelte';
    const characters = ['/', '-', '\\', '|'];
    let index = 0;
    let currentChar = characters[index];
    const updateCharacter = () => {
        index = (index + 1) % characters.length;
        currentChar = characters[index];
    };
    let interval;
    onMount(() => {
        interval = setInterval(updateCharacter, 500);
    });
    onDestroy(() => {
        clearInterval(interval);
    });
</script>
<nav>
    <div class="mt-[3.2rem] flex justify-between items-center">
        <div class="flex text-[2.4rem] font-bold">
            <div class="mr-[1.6rem]">
                <div class="jetbrains__mono">{currentChar}</div>
            </div>
            <div>
                <a href="/" class="text-[2.4rem] hover:underline jetbrains__mono">Aegislash</a>
            </div>
        </div>
        <div class="dm__mono flex">
            <div>
                <a href="https://github.com/aegislash525" target="_blank" class="hover:underline">/github</a>
            </div>
            <div class="ml-[3rem]">
                <a href="https://github.com/aegislash525" target="_blank" class="hover:underline">/leetcode</a>
            </div>
            <div class="ml-[3rem]">
                <a href="https://github.com/aegislash525" target="_blank" class="hover:underline">/codewars</a>
            </div>
            <div class="ml-[3rem]">
                <a href="https://github.com/aegislash525" target="_blank" class="hover:underline">/linkedin</a>
            </div>
        </div>
    </div>
</nav>
