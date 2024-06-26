<script>
    export let title;

    let username;
    let password;
    let adminKey;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            username: $username,
            password: $password,
            admin_key: $adminKey,
        };
        console.log("data=" + JSON.stringify(formData));
        console.log("on url=https://localhost:3000/api/" + title.toLowerCase());
        try {
            const response = await fetch('http://localhost:3000/api/' + title.toLowerCase(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            responseMessage.set(data.message || 'Form submitted successfully!');
        } catch (error) {
            responseMessage.set('Error submitting form');
        }
    };
</script>
<style>
    .auth {
        min-width: 48rem;
        height: fit-content;

        margin: auto;
        padding: 3.2rem;
        border-radius: 1.4rem;
        overflow: hidden;

        background: rgba(0, 0, 0, 0.3);
        box-shadow: 0px 3px 34.3px 3px rgba(0, 0, 0, 0.32);
        backdrop-filter: blur(4px);
    }

    .auth__input {
        width: 100%;
    }
    
    .auth__input input {
        background: none;
        padding: 1rem 1.8rem;
        outline: none;
        border: 1px solid #626262;
        border-radius: 0.6rem;
        margin-bottom: 1.6rem;
    }

    .auth__input input::placeholder {
        color: #ffffff70;
    }

    .auth__input input:focus {
        border: 1px solid #FF9446;
    }
</style>
<div class="w-full h-full flex flex-col justify-center items-center">
    <div class="auth">
        <div class="jetbrains__mono text-center text-medium text-[4rem] mb-[4rem]">{title}</div>
        <form on:submit={handleSubmit} class="flex flex-col justify-center">
            <div class="auth__input">
                <input type="text" placeholder="username" required bind:value={username} class="w-full">
            </div>
            <div class="auth__input">
                <input type="password" placeholder="passwd" required bind:value={password} class="w-full">
            </div>
            <div class="auth__input">
                <input type="text" placeholder="admin key" required bind:value={adminKey} class="w-full">
            </div>
            <button type="submit" class="w-fit m-auto hover:underline 
                                        opacity-70 hover:opacity-100">/{title.toLowerCase()}</button>
        </form>
    </div>
</div>
