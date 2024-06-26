<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    .inter {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "slnt" 0;
    }
    .panel {
        width: 42rem;
        height: 100vh;
        /* padding: 3.2rem; */

        color: #FFFFFF;
        background-color: #2373EA;
    }
    .settings__bg {
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        background: rgba(0, 0, 0, 0.4);
    }
</style>
<script>
    import Component from "../../components/Component.svelte";
    import { onMount } from "svelte";

    const username = 'aegislasher';
    let title = 'Navbar';

    onMount(() => {
        const body = document.body.style;
        body.backgroundColor = '#FFF';
        body.color = '#000';

        return () => {
            body.backgroundColor = '';
            body.color = '';
        };
    });

    const switchPage = (arg) => {
        const main = document.getElementById('main').style;
        if (arg === 'navbar') {
            main.backgroundColor = '#000';
        } else if (arg === 'education') {
            main.backgroundColor = '#FFF';
        }
        console.log(arg);
    };
    
</script>
<svelte:head>
    <title>Dashboard</title>
</svelte:head>
<div class="inter flex">
    <div class="panel text-[1.8rem] flex flex-col justify-between">
        <div class="p-[3.2rem]">
            <div class="panel__title font-bold text-[3.8rem] cursor-default">🗺️ Navigation</div>
            <div class="panel__subtitle font-bold py-[1rem] cursor-default">📝 Customize page</div>
            <div class="mt-[1.8rem] font-bold cursor-default">✍🏻 Edit components</div>
            <div class="my-4 panel__components font-medium">
                <div><button on:click={() => switchPage('navbar')}>🧭 Navbar</button></div>
                <div><button on:click={() => switchPage('education')}>👩🏻‍🏫 Education</button></div>
                <div><button on:click={() => switchPage('skills')}>🧪 Skills</button></div>
                <div><button on:click={() => switchPage('projects')}>📈 Projects</button></div>
            </div>
        </div>
        <div class="font-medium">
            <div class="px-[3.2rem]"><button href="/" class="block py-[2.4rem]">+ Add component</button></div>
            <div><button href="/" class="block px-[3.2rem] py-[2.4rem] w-full text-left settings__bg">⚙️ Settings</button></div>
        </div>
    </div>
    <main id="main" class=" w-full py-[8rem] px-[6rem]">
        <h2 class="font-bold text-[4rem]">Dashboard</h2>
        <h3>Hello, {username[0].toUpperCase() + username
                .substring(1, username.length)
                .toLowerCase()}!</h3>
        <Component {title} />
    </main>
</div>
