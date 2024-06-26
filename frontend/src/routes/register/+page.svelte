<script>
    import Navbar from "../../components/Navbar.svelte";
    import Auth from "../../components/Auth.svelte";
    import { onMount } from "svelte";

    const auth_title = 'Register';
    
    onMount(() => {
        const body = document.body.style;
        body.backgroundColor = '#1E1E1E';
        body.backgroundImage = "url('../../../auth-bg.png')";
        body.height = '80vh';
        body.width = '100vw';
        body.overflow = 'hidden';

        return () => {
            body.backgroundImage = '';
            body.backgroundColor = '';
            body.height = '';
            body.width = '';
            body.overflow = '';
        };
    });
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');
</style>
<svelte:head>
  <title>AEGISLASH</title>
</svelte:head>
<div class="max-w-[1080px] mx-auto">
    <Navbar />
</div>
<Auth title={auth_title} />