<script>
    import Navbar from '../components/Navbar.svelte';
    import AboutMe from '../components/AboutMe.svelte';
    import Education from '../components/Education.svelte';
    import Skills from '../components/Skills.svelte';
    import Projects from '../components/Projects.svelte';
    import Footer from '../components/Footer.svelte';

    let arr = [
        {
            title: "Portfolio",
            role: "Fullstack developer",
            lang: "Ruby on Rails, Svelte",
            year: "2024",
            link: "https://aegislash525.org/"
        },
        {
            title: "Olywka",
            role: "Backend developer",
            lang: "GoLang, React",
            year: "2024 - present",
            link: "https://olywka.ua/"
        },
        {
            title: "Discord bot",
            role: "Software developer",
            lang: "Java, JDA",
            year: "2023",
            link: "https://github.com/aegislash525/kettlebot"
        },
        {
            title: "Forum",
            role: "Fullstack developer",
            lang: "Spring Boot, Bootstrap",
            year: "2023",
            link: "https://github.com/aegislash525/forum"
        },
        {
            title: "Translit GUI",
            role: "Software developer",
            lang: "Java Swing",
            year: "2023",
            link: "https://github.com/aegislash525/ua-translit-java"
        },
        {
            title: "Translit GUI",
            role: "Software developer",
            lang: "Python, tkinter",
            year: "2022",
            link: "https://github.com/aegislash525/ua-translit-python"
        }
    ];
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');
    .bg__configure {
        border-top: 1px rgba(94, 57, 23, 0.575) solid;
        border-bottom: 1px rgba(94, 57, 23, 0.575) solid;
    }
</style>
<svelte:head>
  <title>AEGISLASH</title>
</svelte:head>
<div class="max-w-[1080px] mx-auto">
    <Navbar />
    <AboutMe />
</div>
<div class="bg__configure py-[6.4rem] bg-[url('/bg.png')] border-[#FFF]">
    <div class="max-w-[1080px] mx-auto">
        <Education />
        <Skills />
    </div>
</div>
<div class="max-w-[1890px] mx-auto overflow-hidden">
    <div class="max-w-[1080px] mx-auto">
        <Projects {arr} />
    </div>
</div>
<div class="max-w-[1080px] mx-auto">
    <Footer />
</div>
