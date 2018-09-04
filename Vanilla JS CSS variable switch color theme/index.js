 
        const toggleBtn = document.querySelector("#toggle-theme");
        const darknessSlider = document.querySelector("#darknessSlider");

        toggleBtn.addEventListener('click', (e) => {
            console.log("Switching theme");
            if (document.documentElement.hasAttribute('theme')) {
                document.documentElement.removeAttribute('theme');
            }
            else {
                document.documentElement.setAttribute('theme', 'dark');
            }
        });
        darknessSlider.addEventListener('change', (e)=>{
            const val = darknessSlider.value
            console.log("Changing darkness", val);
            document.documentElement.style.setProperty('--theme-darkness', val);

        });
