console.clear();

// Check if localStorage is empty- WE'RE GOOD IT'S WORKING :D
if (window.localStorage.length == 0) {
    console.log('empty')
    //If local storage is empty, create something like a login screen that asks for your name + identity so it can preset
    introPage = document.querySelector('.introPage');

    let introText = document.createElement('div');
    introText.classList.add('introText');

    let welcome = document.createElement('h1');
    welcome.innerText = "Welcome!"

    let welcomeDesc = document.createElement('h2');
    welcomeDesc.innerText = "Before you get started, we'd like to get a little bit of information about you to personalize your experience!"

    introText.appendChild(welcome);
    introText.appendChild(welcomeDesc);
    introPage.appendChild(introText);

    //Part 2:
    let form = document.createElement('form');
    form.setAttribute("action", "#");
    form.setAttribute("method", "POST");
    form.setAttribute("id", "Login_Info");

    let label_name = document.createElement('label');
    label_name.setAttribute("for", "userName")
    label_name.innerText = "Name: "

    let input_name = document.createElement('input');
    input_name.setAttribute("type", "text");
    input_name.setAttribute("name", "userName");
    input_name.setAttribute("placeholder", "Name");
    input_name.setAttribute("id", "userName");

    let label_identity = document.createElement('label');
    label_identity.setAttribute("for", "identityDropdown")
    label_identity.innerText = "Identity: "

    let select_option = document.createElement('select');
    select_option.setAttribute("name", "identityDropdown");
    select_option.setAttribute("id", "theme");

    //Will add all options at a later point
    let optionAce = document.createElement('option');
    optionAce.setAttribute("value", "Asexual");
    optionAce.innerText = "Asexual";

    let optionAro = document.createElement('option');
    optionAro.setAttribute("value", "Aromantic");
    optionAro.innerText = "Aromantic";

    let optionAroAce = document.createElement('option');
    optionAroAce.setAttribute("value", "AroAce");
    optionAroAce.innerText = "AroAce";

    let optionEnby = document.createElement('option');
    optionEnby.setAttribute("value", "Nonbinary");
    optionEnby.innerText = "Nonbinary";

    let optionTrans = document.createElement('option');
    optionTrans.setAttribute("value", "Transgender");
    optionTrans.innerText = "Transgender";

    let optionGay = document.createElement('option');
    optionGay.setAttribute("value", "Gay");
    optionGay.innerText = "Gay";

    let optionLesbian = document.createElement('option');
    optionLesbian.setAttribute("value", "Lesbian");
    optionLesbian.innerText = "Lesbian";

    let optionBi = document.createElement('option');
    optionBi.setAttribute("value", "Bisexual");
    optionBi.innerText = "Bisexual";

    let optionAgender = document.createElement('option');
    optionAgender.setAttribute("value", "Agender");
    optionAgender.innerText = "Agender";

    let label_br = document.createElement('br');

    select_option.appendChild(optionAce);
    select_option.appendChild(optionAro);
    select_option.appendChild(optionAroAce);
    select_option.appendChild(optionEnby);
    select_option.appendChild(optionTrans);
    select_option.appendChild(optionGay);
    select_option.appendChild(optionLesbian);
    select_option.appendChild(optionBi);
    select_option.appendChild(optionAgender);

    form.appendChild(label_name);
    form.appendChild(input_name);
    form.appendChild(label_br);
    form.appendChild(label_identity);
    form.appendChild(select_option);

    introPage.appendChild(form);

    //Last part with button
    let submitBtn = document.createElement('button');
    submitBtn.setAttribute("class", "submit");
    submitBtn.innerText = "Submit"

    let wrapper = document.createElement('div');
    wrapper.setAttribute("id", "wrapper");

    wrapper.appendChild(submitBtn);
    introPage.appendChild(wrapper);


    //Ok so... once you click submit, it should add to local storage and remove all the created elements
    submitBtn.addEventListener('click', function() {
        //Get the selected option and name, and store in local storage
        let enteredName = document.getElementById("userName").value;
        // console.log(enteredName);

        let enteredIdentity = document.getElementById("theme").value;
        // console.log(enteredIdentity);

        localStorage.setItem('Name', JSON.stringify(enteredName));
        localStorage.setItem('Theme', JSON.stringify(enteredIdentity));

        introPage.remove();
        document.querySelector(".homepage").style.setProperty('display', 'block');
    })
}

//Setting the theme. This- will not be fun. Should probably be called at the start and whenever the user updates theme in their settings
function setTheme(theme_selection) {
    console.log("here");
    if (theme_selection === "Asexual") {
        document.querySelector("body").style.backgroundColor = "#460046";
        document.querySelector(".glyphicon-cog").style.setProperty('color', '#ffffff', 'important');

        //Creating conditionals because some elements don't exist on all pages
        if (document.querySelector(".nav_j") !== null) {
            document.querySelector(".nav_j").style.setProperty('background-color', '#000000', 'important');
        }

        if (document.querySelector(".nav") !== null) {
            document.querySelector(".nav").style.setProperty('background-color', '#000000', 'important');
        }

        //Homepage
        if (document.querySelector(".journal") !== null) {
            document.querySelector(".journal").style.setProperty('background-image', 'url("Cover_Img/Asexual_Cover.png', 'important');
        }

        //Journal pages
        if (document.querySelector(".journal_Cover") !== null) {
            document.querySelector(".journal_Cover").style.setProperty('background-image', 'url("Cover_Img/Asexual_Cover.png")', 'important');
        }
        //Debating changing these to a solid color
        if (document.querySelector(".journal_Open") !== null) {
            document.querySelector(".journal_Open").style.setProperty('background-color', '#800080', 'important');
            document.querySelector(".journal_Open").style.setProperty('border-right', '4px solid #2d2d2d', 'important');
        }
        if (document.querySelector(".journal_Open2") !== null) {
            document.querySelector(".journal_Open2").style.setProperty('background-color', '#800080', 'important');
        }

        //Journal page content
        if (document.querySelectorAll(".date").length > 0) {
            document.querySelectorAll(".date").forEach(function (date) {
                date.style.setProperty('color', '#A3A3A3', 'important');
            })
        }

        if (document.querySelectorAll(".title").length > 0) {
            document.querySelectorAll(".title").forEach(function (title) {
                title.style.setProperty('background-color', '#ffffff', 'important');
            })
        }

        if (document.querySelectorAll(".entry").length > 0) {
            document.querySelectorAll(".entry").forEach(function (entry) {
                entry.style.setProperty('background-color', '#F4F4F4', 'important');
            })
        }

        //Buttons on journal page
        if (document.querySelectorAll(".journalSave").length > 0) {
            document.querySelectorAll(".journalSave").forEach(function (journalSave) {
                journalSave.style.setProperty('background-color', '#A3A3A3', 'important');
            })
        }

        if (document.querySelector(".prevPage") !== null) {
            document.querySelector(".prevPage").style.setProperty('background-color', "#ffffff");
            document.querySelector(".prevPage").style.setProperty('color', "#000000");
        }

        if (document.querySelector(".nextPage") !== null) {
            document.querySelector(".nextPage").style.setProperty('background-color', "#ffffff");
            document.querySelector(".nextPage").style.setProperty('color', "#000000");
        }

        //Toggle settings
        document.getElementById("AsexualOption").selected = true;
        document.getElementById("AromanticOption").selected = false;
        document.getElementById("AroAceOption").selected = false;
        document.getElementById("EnbyOption").selected = false;
        document.getElementById("TransOption").selected = false;
        document.getElementById("GayOption").selected = false;
        document.getElementById("LesbianOption").selected = false;
        document.getElementById("BisexualOption").selected = false;
        document.getElementById("AgenderOption").selected = false;
    } else if (theme === "Aromantic") {
        document.querySelector("body").style.backgroundColor = "#B0EB7E";
        document.querySelector(".glyphicon-cog").style.setProperty('color', '#ffffff', 'important');

        if (document.querySelector(".nav_j") !== null) {
            document.querySelector(".nav_j").style.setProperty('background-color', '#000000', 'important');
        }

        if (document.querySelector(".nav") !== null) {
            document.querySelector(".nav").style.setProperty('background-color', '#000000', 'important');
        }

        //Homepage
        if (document.querySelector(".journal") !== null) {
            document.querySelector(".journal").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png', 'important');
        }

        //Journal pages
        if (document.querySelector(".journal_Cover") !== null) {
            document.querySelector(".journal_Cover").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
        }
        if (document.querySelector(".journal_Open") !== null) {
            // document.querySelector(".journal_Open").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open").style.setProperty('background-color', "#01A82F");

        }
        if (document.querySelector(".journal_Open2") !== null) {
            // document.querySelector(".journal_Open2").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open2").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open2").style.setProperty('background-color', "#01A82F");
        }

        //Journal page content
        if (document.querySelectorAll(".date").length > 0) {
            document.querySelectorAll(".date").forEach(function (date) {
                date.style.setProperty('color', '#000000', 'important');
            })
        }

        if (document.querySelectorAll(".title").length > 0) {
            document.querySelectorAll(".title").forEach(function (title) {
                title.style.setProperty('background-color', '#ffffff', 'important');
            })
        }

        if (document.querySelectorAll(".entry").length > 0) {
            document.querySelectorAll(".entry").forEach(function (entry) {
                entry.style.setProperty('background-color', '#F4F4F4', 'important');
                entry.style.setProperty('opacity', '90%', 'important');
            })
        }

        //Buttons on journal page
        if (document.querySelectorAll(".journalSave").length > 0) {
            document.querySelectorAll(".journalSave").forEach(function (journalSave) {
                journalSave.style.setProperty('background-color', '#A3A3A3', 'important');
            })
        }

        if (document.querySelector(".prevPage") !== null) {
            document.querySelector(".prevPage").style.setProperty('background-color', "#ffffff");
            document.querySelector(".prevPage").style.setProperty('color', "#000000");
        }

        if (document.querySelector(".nextPage") !== null) {
            document.querySelector(".nextPage").style.setProperty('background-color', "#ffffff");
            document.querySelector(".nextPage").style.setProperty('color', "#000000");
        }

        //Toggle settings
        document.getElementById("AsexualOption").selected = false;
        document.getElementById("AromanticOption").selected = true;
        document.getElementById("AroAceOption").selected = false;
        document.getElementById("EnbyOption").selected = false;
        document.getElementById("TransOption").selected = false;
        document.getElementById("GayOption").selected = false;
        document.getElementById("LesbianOption").selected = false;
        document.getElementById("BisexualOption").selected = false;
        document.getElementById("AgenderOption").selected = false;

    } else if (theme === "AroAce") {
        document.querySelector("body").style.backgroundColor = "#7CC4F0";
        document.querySelector(".glyphicon-cog").style.setProperty('color', '#ECCD00', 'important');

        if (document.querySelector(".nav_j") !== null) {
            document.querySelector(".nav_j").style.setProperty('background-color', '#203856', 'important');
        }

        if (document.querySelector(".nav") !== null) {
            document.querySelector(".nav").style.setProperty('background-color', '#203856', 'important');
        }

        //Homepage
        if (document.querySelector(".journal") !== null) {
            document.querySelector(".journal").style.setProperty('background-image', 'url("Cover_Img/AroAce_Cover.png', 'important');
        }

        //Journal pages
        if (document.querySelector(".journal_Cover") !== null) {
            document.querySelector(".journal_Cover").style.setProperty('background-image', 'url("Cover_Img/AroAce_Cover.png")', 'important');
        }
        if (document.querySelector(".journal_Open") !== null) {
            // document.querySelector(".journal_Open").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open").style.setProperty('background-color', "#E28C00");
        }
        if (document.querySelector(".journal_Open2") !== null) {
            // document.querySelector(".journal_Open2").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open2").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open2").style.setProperty('background-color', "#E28C00");
        }

        //Journal page content
        if (document.querySelectorAll(".date").length > 0) {
            document.querySelectorAll(".date").forEach(function (date) {
                date.style.setProperty('color', '#203856', 'important');
            })
        }

        if (document.querySelectorAll(".title").length > 0) {
            document.querySelectorAll(".title").forEach(function (title) {
                title.style.setProperty('background-color', '#203856', 'important');
                title.style.setProperty('color', '#ffffff', 'important');
            })
        }

        if (document.querySelectorAll(".entry").length > 0) {
            document.querySelectorAll(".entry").forEach(function (entry) {
                entry.style.setProperty('background-color', '#F4F4F4', 'important');
                entry.style.setProperty('opacity', '90%', 'important');
            })
        }

        //Buttons on journal page
        if (document.querySelectorAll(".journalSave").length > 0) {
            document.querySelectorAll(".journalSave").forEach(function (journalSave) {
                journalSave.style.setProperty('background-color', '#ECCD00', 'important');
            })
        }

        if (document.querySelector(".prevPage") !== null) {
            document.querySelector(".prevPage").style.setProperty('background-color', "#203856");
            document.querySelector(".prevPage").style.setProperty('color', "#ffffff");
        }

        if (document.querySelector(".nextPage") !== null) {
            document.querySelector(".nextPage").style.setProperty('background-color', "#203856");
            document.querySelector(".nextPage").style.setProperty('color', "#ffffff");
        }

        //Toggle settings
        document.getElementById("AsexualOption").selected = false;
        document.getElementById("AromanticOption").selected = false;
        document.getElementById("AroAceOption").selected = true;
        document.getElementById("EnbyOption").selected = false;
        document.getElementById("TransOption").selected = false;
        document.getElementById("GayOption").selected = false;
        document.getElementById("LesbianOption").selected = false;
        document.getElementById("BisexualOption").selected = false;
        document.getElementById("AgenderOption").selected = false;

    } else if (theme === "Nonbinary") {
        document.querySelector("body").style.backgroundColor = "#744798";
        document.querySelector(".glyphicon-cog").style.setProperty('color', '#FFF433', 'important');

        if (document.querySelector(".nav_j") !== null) {
            document.querySelector(".nav_j").style.setProperty('background-color', '#2D2D2D', 'important');
        }

        if (document.querySelector(".nav") !== null) {
            document.querySelector(".nav").style.setProperty('background-color', '#2D2D2D', 'important');
        }

        //Homepage
        if (document.querySelector(".journal") !== null) {
            document.querySelector(".journal").style.setProperty('background-image', 'url("Cover_Img/NonBinary_Cover.png', 'important');
        }

        //Journal pages
        if (document.querySelector(".journal_Cover") !== null) {
            document.querySelector(".journal_Cover").style.setProperty('background-image', 'url("Cover_Img/NonBinary_Cover.png")', 'important');
        }
        if (document.querySelector(".journal_Open") !== null) {
            // document.querySelector(".journal_Open").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open").style.setProperty('background-color', "#9B59D0");
        }
        if (document.querySelector(".journal_Open2") !== null) {
            // document.querySelector(".journal_Open2").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open2").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open2").style.setProperty('background-color', "#9B59D0");
        }

        //Journal page content
        if (document.querySelectorAll(".date").length > 0) {
            document.querySelectorAll(".date").forEach(function (date) {
                date.style.setProperty('color', '#2D2D2D', 'important');
            })
        }

        if (document.querySelectorAll(".title").length > 0) {
            document.querySelectorAll(".title").forEach(function (title) {
                title.style.setProperty('background-color', '#2D2D2D', 'important');
                title.style.setProperty('color', '#ffffff', 'important');
            })
        }

        if (document.querySelectorAll(".entry").length > 0) {
            document.querySelectorAll(".entry").forEach(function (entry) {
                entry.style.setProperty('background-color', '#F4F4F4', 'important');
                entry.style.setProperty('opacity', '90%', 'important');
            })
        }

        //Buttons on journal page
        if (document.querySelectorAll(".journalSave").length > 0) {
            document.querySelectorAll(".journalSave").forEach(function (journalSave) {
                journalSave.style.setProperty('background-color', '#FFF433', 'important');
            })
        }

        if (document.querySelector(".prevPage") !== null) {
            document.querySelector(".prevPage").style.setProperty('background-color', "#ffffff");
            document.querySelector(".nextPage").style.setProperty('color', "#000000");
        }

        if (document.querySelector(".nextPage") !== null) {
            document.querySelector(".nextPage").style.setProperty('background-color', "#ffffff");
            document.querySelector(".nextPage").style.setProperty('color', "#000000");
        }

        //Toggle settings
        document.getElementById("AsexualOption").selected = false;
        document.getElementById("AromanticOption").selected = false;
        document.getElementById("AroAceOption").selected = false;
        document.getElementById("EnbyOption").selected = true;
        document.getElementById("TransOption").selected = false;
        document.getElementById("GayOption").selected = false;
        document.getElementById("LesbianOption").selected = false;
        document.getElementById("BisexualOption").selected = false;
        document.getElementById("AgenderOption").selected = false;

    } else if (theme === "Transgender") {
        document.querySelector("body").style.backgroundColor = "#F3C1CA";
        document.querySelector(".glyphicon-cog").style.setProperty('color', '#5BCEFA', 'important');

        if (document.querySelector(".nav_j") !== null) {
            document.querySelector(".nav_j").style.setProperty('background-color', '#FFFFFF', 'important');
        }

        if (document.querySelector(".nav") !== null) {
            document.querySelector(".nav").style.setProperty('background-color', '#FFFFFF', 'important');
        }

        //Homepage
        if (document.querySelector(".journal") !== null) {
            document.querySelector(".journal").style.setProperty('background-image', 'url("Cover_Img/Trans_Cover.png', 'important');
        }

        //Journal pages
        if (document.querySelector(".journal_Cover") !== null) {
            document.querySelector(".journal_Cover").style.setProperty('background-image', 'url("Cover_Img/Trans_Cover.png")', 'important');
        }
        if (document.querySelector(".journal_Open") !== null) {
            // document.querySelector(".journal_Open").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open").style.setProperty('background-color', "#5BCEFA");
        }
        if (document.querySelector(".journal_Open2") !== null) {
            // document.querySelector(".journal_Open2").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open2").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open2").style.setProperty('background-color', "#5BCEFA");
        }

        //Journal page content
        if (document.querySelectorAll(".date").length > 0) {
            document.querySelectorAll(".date").forEach(function (date) {
                date.style.setProperty('color', '#000000', 'important');
            })
        }

        if (document.querySelectorAll(".title").length > 0) {
            document.querySelectorAll(".title").forEach(function (title) {
                title.style.setProperty('background-color', '#F5A9B8', 'important');
                title.style.setProperty('color', '#000000', 'important'); //Maybe switch to an off-black color?
            })
        }

        if (document.querySelectorAll(".entry").length > 0) {
            document.querySelectorAll(".entry").forEach(function (entry) {
                entry.style.setProperty('background-color', '#F4F4F4', 'important');
                entry.style.setProperty('opacity', '90%', 'important');
            })
        }

        //Buttons on journal page
        if (document.querySelectorAll(".journalSave").length > 0) {
            document.querySelectorAll(".journalSave").forEach(function (journalSave) {
                journalSave.style.setProperty('background-color', '#F5A9B8', 'important');
            })
        }

        if (document.querySelector(".prevPage") !== null) {
            document.querySelector(".prevPage").style.setProperty('background-color', "#ffffff");
            document.querySelector(".nextPage").style.setProperty('color', "#000000");
        }

        if (document.querySelector(".nextPage") !== null) {
            document.querySelector(".nextPage").style.setProperty('background-color', "#ffffff");
            document.querySelector(".nextPage").style.setProperty('color', "#000000");
        }

        //Toggle settings
        document.getElementById("AsexualOption").selected = false;
        document.getElementById("AromanticOption").selected = false;
        document.getElementById("AroAceOption").selected = false;
        document.getElementById("EnbyOption").selected = false;
        document.getElementById("TransOption").selected = true;
        document.getElementById("GayOption").selected = false;
        document.getElementById("LesbianOption").selected = false;
        document.getElementById("BisexualOption").selected = false;
        document.getElementById("AgenderOption").selected = false;

    } else if (theme === "Gay") {
        document.querySelector("body").style.backgroundColor = "#1BB792";
        document.querySelector(".glyphicon-cog").style.setProperty('color', '#81EBBF', 'important');

        if (document.querySelector(".nav_j") !== null) {
            document.querySelector(".nav_j").style.setProperty('background-color', '#421D7C', 'important');
        }

        if (document.querySelector(".nav") !== null) {
            document.querySelector(".nav").style.setProperty('background-color', '#421D7C', 'important');
        }

        //Homepage
        if (document.querySelector(".journal") !== null) {
            document.querySelector(".journal").style.setProperty('background-image', 'url("Cover_Img/Gay_Cover.png', 'important');
        }

        //Journal pages
        if (document.querySelector(".journal_Cover") !== null) {
            document.querySelector(".journal_Cover").style.setProperty('background-image', 'url("Cover_Img/Gay_Cover.png")', 'important');
        }
        if (document.querySelector(".journal_Open") !== null) {
            // document.querySelector(".journal_Open").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open").style.setProperty('background-color', "#81D4EB");
        }
        if (document.querySelector(".journal_Open2") !== null) {
            // document.querySelector(".journal_Open2").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open2").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open2").style.setProperty('background-color', "#81D4EB");
        }

        //Journal page content
        if (document.querySelectorAll(".date").length > 0) {
            document.querySelectorAll(".date").forEach(function (date) {
                date.style.setProperty('color', '#421D7C', 'important');
            })
        }

        if (document.querySelectorAll(".title").length > 0) {
            document.querySelectorAll(".title").forEach(function (title) {
                title.style.setProperty('background-color', '#148F6E', 'important');
                title.style.setProperty('color', '#000000', 'important'); //Maybe switch to an off-black color?
            })
        }

        if (document.querySelectorAll(".entry").length > 0) {
            document.querySelectorAll(".entry").forEach(function (entry) {
                entry.style.setProperty('background-color', '#F4F4F4', 'important');
                entry.style.setProperty('opacity', '90%', 'important');
            })
        }

        //Buttons on journal page
        if (document.querySelectorAll(".journalSave").length > 0) {
            document.querySelectorAll(".journalSave").forEach(function (journalSave) {
                journalSave.style.setProperty('background-color', '#6FB0E4', 'important');
                journalSave.style.setProperty('color', '#421D7C', 'important');
            })
        }

        if (document.querySelector(".prevPage") !== null) {
            document.querySelector(".prevPage").style.setProperty('background-color', "#ffffff");
            document.querySelector(".nextPage").style.setProperty('color', "#000000");
        }

        if (document.querySelector(".nextPage") !== null) {
            document.querySelector(".nextPage").style.setProperty('background-color', "#ffffff");
            document.querySelector(".nextPage").style.setProperty('color', "#000000");
        }

        //Toggle settings
        document.getElementById("AsexualOption").selected = false;
        document.getElementById("AromanticOption").selected = false;
        document.getElementById("AroAceOption").selected = false;
        document.getElementById("EnbyOption").selected = false;
        document.getElementById("TransOption").selected = false;
        document.getElementById("GayOption").selected = true;
        document.getElementById("LesbianOption").selected = false;
        document.getElementById("BisexualOption").selected = false;
        document.getElementById("AgenderOption").selected = false;

    } else if (theme === "Lesbian") {
        document.querySelector("body").style.backgroundColor = "#DB6BAD";
        document.querySelector(".glyphicon-cog").style.setProperty('color', '#EF7526', 'important');

        if (document.querySelector(".nav_j") !== null) {
            document.querySelector(".nav_j").style.setProperty('background-color', '#A30162', 'important');
        }

        if (document.querySelector(".nav") !== null) {
            document.querySelector(".nav").style.setProperty('background-color', '#A30162', 'important');
        }

        //Homepage
        if (document.querySelector(".journal") !== null) {
            document.querySelector(".journal").style.setProperty('background-image', 'url("Cover_Img/Lesbian_Cover.png', 'important');
        }

        //Journal pages
        if (document.querySelector(".journal_Cover") !== null) {
            document.querySelector(".journal_Cover").style.setProperty('background-image', 'url("Cover_Img/Lesbian_Cover.png")', 'important');
        }
        if (document.querySelector(".journal_Open") !== null) {
            // document.querySelector(".journal_Open").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open").style.setProperty('background-color', "#F28641");
        }
        if (document.querySelector(".journal_Open2") !== null) {
            // document.querySelector(".journal_Open2").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open2").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open2").style.setProperty('background-color', "#F28641");
        }

        //Journal page content
        if (document.querySelectorAll(".date").length > 0) {
            document.querySelectorAll(".date").forEach(function (date) {
                date.style.setProperty('color', '#A30162', 'important');
            })
        }

        if (document.querySelectorAll(".title").length > 0) {
            document.querySelectorAll(".title").forEach(function (title) {
                title.style.setProperty('background-color', '#D52C00', 'important');
                title.style.setProperty('color', '#EF92C8', 'important'); //Maybe switch to an off-black color?
            })
        }

        if (document.querySelectorAll(".entry").length > 0) {
            document.querySelectorAll(".entry").forEach(function (entry) {
                entry.style.setProperty('background-color', '#F4F4F4', 'important');
                entry.style.setProperty('opacity', '90%', 'important');
            })
        }

        //Buttons on journal page
        if (document.querySelectorAll(".journalSave").length > 0) {
            document.querySelectorAll(".journalSave").forEach(function (journalSave) {
                journalSave.style.setProperty('background-color', '#FBAF7B', 'important');
                journalSave.style.setProperty('color', '#720546', 'important');
            })
        }

        if (document.querySelector(".prevPage") !== null) {
            document.querySelector(".prevPage").style.setProperty('background-color', "#B55590"); //This actually works just add a border
            document.querySelector(".nextPage").style.setProperty('color', "#000000");
        }

        if (document.querySelector(".nextPage") !== null) {
            document.querySelector(".nextPage").style.setProperty('background-color', "#B55590");
            document.querySelector(".nextPage").style.setProperty('color', "#000000");
        }

        //Toggle settings
        document.getElementById("AsexualOption").selected = false;
        document.getElementById("AromanticOption").selected = false;
        document.getElementById("AroAceOption").selected = false;
        document.getElementById("EnbyOption").selected = false;
        document.getElementById("TransOption").selected = false;
        document.getElementById("GayOption").selected = false;
        document.getElementById("LesbianOption").selected = true;
        document.getElementById("BisexualOption").selected = false;
        document.getElementById("AgenderOption").selected = false;

    } else if (theme === "Bisexual") {
        document.querySelector("body").style.backgroundColor = "#844780";
        document.querySelector(".glyphicon-cog").style.setProperty('color', '#0038A8', 'important');

        if (document.querySelector(".nav_j") !== null) {
            document.querySelector(".nav_j").style.setProperty('background-color', '#D60270', 'important');
        }

        if (document.querySelector(".nav") !== null) {
            document.querySelector(".nav").style.setProperty('background-color', '#D60270', 'important');
        }

        //Homepage
        if (document.querySelector(".journal") !== null) {
            document.querySelector(".journal").style.setProperty('background-image', 'url("Cover_Img/Bisexual_Cover.png', 'important');
        }

        //Journal pages
        if (document.querySelector(".journal_Cover") !== null) {
            document.querySelector(".journal_Cover").style.setProperty('background-image', 'url("Cover_Img/Bisexual_Cover.png")', 'important');
        }
        if (document.querySelector(".journal_Open") !== null) {
            // document.querySelector(".journal_Open").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open").style.setProperty('background-color', "#1B418D");
        }
        if (document.querySelector(".journal_Open2") !== null) {
            // document.querySelector(".journal_Open2").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open2").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open2").style.setProperty('background-color', "#1B418D");
        }

        //Journal page content
        if (document.querySelectorAll(".date").length > 0) {
            document.querySelectorAll(".date").forEach(function (date) {
                date.style.setProperty('color', '#FEA8D5', 'important');
            })
        }

        if (document.querySelectorAll(".title").length > 0) {
            document.querySelectorAll(".title").forEach(function (title) {
                title.style.setProperty('background-color', '#83497F', 'important');
                title.style.setProperty('color', '#ffffff', 'important'); //Maybe switch to an off-black color?
            })
        }

        if (document.querySelectorAll(".entry").length > 0) {
            document.querySelectorAll(".entry").forEach(function (entry) {
                entry.style.setProperty('background-color', '#F4F4F4', 'important');
                entry.style.setProperty('opacity', '90%', 'important');
            })
        }

        //Buttons on journal page
        if (document.querySelectorAll(".journalSave").length > 0) {
            document.querySelectorAll(".journalSave").forEach(function (journalSave) {
                journalSave.style.setProperty('background-color', '#83497F', 'important');
                journalSave.style.setProperty('color', '#ffffff', 'important');
            })
        }

        if (document.querySelector(".prevPage") !== null) {
            document.querySelector(".prevPage").style.setProperty('background-color', "#D60270"); //This actually works just add a border
            document.querySelector(".nextPage").style.setProperty('color', "#000000");
        }

        if (document.querySelector(".nextPage") !== null) {
            document.querySelector(".nextPage").style.setProperty('background-color', "#D60270");
            document.querySelector(".nextPage").style.setProperty('color', "#000000");
        }

        //Toggle settings
        document.getElementById("AsexualOption").selected = false;
        document.getElementById("AromanticOption").selected = false;
        document.getElementById("AroAceOption").selected = false;
        document.getElementById("EnbyOption").selected = false;
        document.getElementById("TransOption").selected = false;
        document.getElementById("GayOption").selected = false;
        document.getElementById("LesbianOption").selected = false;
        document.getElementById("BisexualOption").selected = true;
        document.getElementById("AgenderOption").selected = false;

    } else if (theme === "Agender") {
        document.querySelector("body").style.backgroundColor = "#CBCBCB";
        document.querySelector(".glyphicon-cog").style.setProperty('color', '#B8F483', 'important');

        if (document.querySelector(".nav_j") !== null) {
            document.querySelector(".nav_j").style.setProperty('background-color', '#000000', 'important');
        }

        if (document.querySelector(".nav") !== null) {
            document.querySelector(".nav").style.setProperty('background-color', '#000000', 'important');
        }

        //Homepage
        if (document.querySelector(".journal") !== null) {
            document.querySelector(".journal").style.setProperty('background-image', 'url("Cover_Img/Agender_Cover.png', 'important');
        }

        //Journal pages
        if (document.querySelector(".journal_Cover") !== null) {
            document.querySelector(".journal_Cover").style.setProperty('background-image', 'url("Cover_Img/Agender_Cover.png")', 'important');
        }
        if (document.querySelector(".journal_Open") !== null) {
            // document.querySelector(".journal_Open").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open").style.setProperty('background-color', "#B8F483");
        }
        if (document.querySelector(".journal_Open2") !== null) {
            // document.querySelector(".journal_Open2").style.setProperty('background-image', 'url("Cover_Img/Aromantic_Cover.png")', 'important');
            // document.querySelector(".journal_Open2").style.setProperty('background-color', "rgba(255, 255, 255, 0.1)");
            document.querySelector(".journal_Open2").style.setProperty('background-color', "#B8F483");
        }

        //Journal page content
        if (document.querySelectorAll(".date").length > 0) {
            document.querySelectorAll(".date").forEach(function (date) {
                date.style.setProperty('color', '#000000', 'important');
            })
        }

        if (document.querySelectorAll(".title").length > 0) {
            document.querySelectorAll(".title").forEach(function (title) {
                title.style.setProperty('background-color', '#B9B9B9', 'important');
                title.style.setProperty('color', '#000000', 'important'); //Maybe switch to an off-black color?
            })
        }

        if (document.querySelectorAll(".entry").length > 0) {
            document.querySelectorAll(".entry").forEach(function (entry) {
                entry.style.setProperty('background-color', '#F4F4F4', 'important');
                entry.style.setProperty('opacity', '90%', 'important');
            })
        }

        //Buttons on journal page
        if (document.querySelectorAll(".journalSave").length > 0) {
            document.querySelectorAll(".journalSave").forEach(function (journalSave) {
                journalSave.style.setProperty('background-color', '#B9B9B9', 'important');
                journalSave.style.setProperty('color', '#000000', 'important');
            })
        }

        if (document.querySelector(".prevPage") !== null) {
            document.querySelector(".prevPage").style.setProperty('background-color', "#ffffff"); //This actually works just add a border
            document.querySelector(".nextPage").style.setProperty('color', "#000000");
        }

        if (document.querySelector(".nextPage") !== null) {
            document.querySelector(".nextPage").style.setProperty('background-color', "#ffffff");
            document.querySelector(".nextPage").style.setProperty('color', "#000000");
        }

        //Toggle settings
        document.getElementById("AsexualOption").selected = false;
        document.getElementById("AromanticOption").selected = false;
        document.getElementById("AroAceOption").selected = false;
        document.getElementById("EnbyOption").selected = false;
        document.getElementById("TransOption").selected = false;
        document.getElementById("GayOption").selected = false;
        document.getElementById("LesbianOption").selected = false;
        document.getElementById("BisexualOption").selected = false;
        document.getElementById("AgenderOption").selected = true;

    }
}

//Set up a method here that window has to wait for: Getting the data in affirmations.json
//May come back to this when bg's not 200+

//Getting previous local data:
//Ah... so it has to be async... lol
let userName;
let theme;
let Entries = [];
let currentPage = 0;
window.addEventListener('DOMContentLoaded', function() {
    //Fuck uh- how do I parse my data...
    userName_temp = localStorage.getItem('Name');
    userName = JSON.parse(userName_temp);
    console.log(userName);

    theme_temp = localStorage.getItem('Theme');
    theme = JSON.parse(theme_temp);
    console.log(theme);

    setTheme(theme);

    //Add journal entries once it becomes applicable
    Entries = localStorage.getItem("Entries");
    // if (Entries_temp) {
    //     Entries = JSON.parse(Entries_temp);
    //     console.log(Entries)
    // }
    Entries = JSON.parse(Entries) || [];
    console.log(Entries);


    //Initializing the homepage will also be in here. Fuck it-
    document.querySelector('.NameIntro > h1').innerText = "Welcome, " + userName;

    //Setting up affirmation section (need to come back to do JSON)
    document.querySelector('.affirmation > h2').innerText = "[affirmation here]";
});





//Get the feeling this'll be used a lot
function clearcontent(elementID) { 
        document.querySelector(elementID).innerHTML = ""; 
    }

//Create a new entry
//Steps to do this:
    //Create a new page
    //Date is entered automatically by using the Date object
    //Title becomes an optional thing to type in (so... must be an input)
    //Entry itself becomes a thing to type in
    //Let's make it that when the user clicks "Enter" it saves. I think that'll work. That or they click
        //Off of the text book (may want to do a "saved at this time" notif in the top corner)

function addNewEntry() {
    //Scroll to end of journal
    if (currentPage === 0) {
        document.querySelector('.journal_Cover').style.display = "none";
        document.querySelector('.journal_Open').style.display = "block";
        document.querySelector('.journal_Open2').style.display = "block";
    }

    //Else if... currentPage % 2 === 0? Even number... I think.
    console.log(currentPage);
    console.log("Mod " + Entries.length % 2);

    //Ok so- I have- if the mod === 1, the new entry should go on the right side. Right now it defaults to the left
    //CurrentPage- I'm like 90% sure it's Entries.Length / 2.floor (round down). Should then load in the previous entry and start the next
    //Actually- is this just assigning current-
        //Honestly- I have like nothing else I can do for the HackAThon I'm so tired
    // if (Entries.length % 2 === 1) {

    // }

    //Here's the next thing to fix... so if both pages are filled, then clear both of them + increase page count
    //And I've... only made it possible to add to the left page... so yeah let's work with that first
    let newPage = document.querySelector(".journal_Open");
    let newPage2 = document.querySelector(".journal_Open2");

    if (newPage.innerHTML.trim() !== '' && newPage2.innerHTML.trim() !== '') {
        clearcontent('.journal_Open');
        clearcontent('.journal_Open2');
        currentPage = currentPage + 1;

        //Create for journal_Open
        //Create date element (can't be adjusted)
        let date_el = document.createElement('p');
        date_el.setAttribute("class", "date");
        let currentDate = new Date();
        date_el.innerText = currentDate.toLocaleDateString();

        //Create title element (can be adjusted)
        let inputBox = document.createElement('div');
        inputBox.setAttribute("class", "input_box");

        let titleInput = document.createElement('input');
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("class", "title");
        titleInput.setAttribute("placeholder", "Title");

        //Create entry (can be adjusted)
        let EntryInput = document.createElement('textarea');
        EntryInput.setAttribute("class", "entry");
        EntryInput.setAttribute("name", "Entry");
        // EntryInput.setAttribute("cols", "60");
        // EntryInput.setAttribute("rows", "22");

        //Create save btn (I think this is necessary)
        let saveJournalBtn = document.createElement('button');
        saveJournalBtn.setAttribute("class", "journalSave");
        saveJournalBtn.setAttribute("onclick", "saveEntry()");
        saveJournalBtn.innerText = "Save"

        //In order to know what page I'm adding to: Divide entry length (total entries) by 2.
            //If even, add to journal_Open
            //If odd, add to journal_Open2
        
        newPage.appendChild(date_el);
        inputBox.appendChild(titleInput);
        newPage.appendChild(inputBox);
        newPage.appendChild(EntryInput);
        newPage.appendChild(saveJournalBtn);

        titleInput.focus();
    } else if (newPage.innerHTML.trim() !== '' && newPage2.innerHTML.trim() === '') {
        // console.log(newPage.innerHTML.trim());
        //Creating for journal_Open2
        //Create date element (can't be adjusted)
        let date_el2 = document.createElement('p');
        date_el2.setAttribute("class", "date");
        let currentDate2 = new Date();
        date_el2.innerText = currentDate2.toLocaleDateString();

        //Create title element (can be adjusted)
        let inputBox2 = document.createElement('div');
        inputBox2.setAttribute("class", "input_box");

        let titleInput2 = document.createElement('input');
        titleInput2.setAttribute("type", "text");
        titleInput2.setAttribute("class", "title");
        titleInput2.setAttribute("placeholder", "Title");

        //Create entry (can be adjusted)
        let EntryInput2 = document.createElement('textarea');
        EntryInput2.setAttribute("class", "entry");
        EntryInput2.setAttribute("name", "Entry");
        // EntryInput2.setAttribute("cols", "60");
        // EntryInput2.setAttribute("rows", "22");

        //Create save btn (I think this is necessary)
        let saveJournalBtn2 = document.createElement('button');
        saveJournalBtn2.setAttribute("class", "journalSave");
        saveJournalBtn2.setAttribute("onclick", "saveEntry()");
        saveJournalBtn2.innerText = "Save"

        //In order to know what page I'm adding to: Divide entry length (total entries) by 2.
            //If even, add to journal_Open
            //If odd, add to journal_Open2
        
        newPage2.appendChild(date_el2);
        inputBox2.appendChild(titleInput2);
        newPage2.appendChild(inputBox2);
        newPage2.appendChild(EntryInput2);
        newPage2.appendChild(saveJournalBtn2);

        titleInput2.focus();
    } else {
        //Add to journal_Open if there's nothing
        //Create for journal_Open
        //Create date element (can't be adjusted)
        let date_el = document.createElement('p');
        date_el.setAttribute("class", "date");
        let currentDate = new Date();
        date_el.innerText = currentDate.toLocaleDateString();

        //Create title element (can be adjusted)
        let inputBox = document.createElement('div');
        inputBox.setAttribute("class", "input_box");

        let titleInput = document.createElement('input');
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("class", "title");
        titleInput.setAttribute("placeholder", "Title");

        //Create entry (can be adjusted)
        let EntryInput = document.createElement('textarea');
        EntryInput.setAttribute("class", "entry");
        EntryInput.setAttribute("name", "Entry");
        // EntryInput.setAttribute("cols", "60");
        // EntryInput.setAttribute("rows", "22");

        //Create save btn (I think this is necessary)
        let saveJournalBtn = document.createElement('button');
        saveJournalBtn.setAttribute("class", "journalSave");
        saveJournalBtn.setAttribute("onclick", "saveEntry()");
        saveJournalBtn.innerText = "Save"

        //In order to know what page I'm adding to: Divide entry length (total entries) by 2.
            //If even, add to journal_Open
            //If odd, add to journal_Open2
        
        newPage.appendChild(date_el);
        inputBox.appendChild(titleInput);
        newPage.appendChild(inputBox);
        newPage.appendChild(EntryInput);
        newPage.appendChild(saveJournalBtn);

        titleInput.focus();
    }

    //OK THIS PART OF IT WORKS GREAT PROGRESS


    //Has to get pushed to local storage at the end- I think we'll do it through save btn?

    setTheme(theme);

}

function saveEntry() {
    console.log("save")
    //Saving to local storage
    // console.log(document.querySelector('.title').value);

    //I may just need to restart this. Fuck.
    // if (Entries) {
        let currentTitles = document.querySelectorAll('.title');
        let currentEntries = document.querySelectorAll('.entry');
        let currentDates = document.querySelectorAll('.date');

    console.log('down here')

    let newEntry;

        if (currentTitles.length === 2) {
            newEntry = {
                title: currentTitles[1].value,
                content: currentEntries[1].value,
                date: currentDates[1].innerText,
            };
        } else if (currentTitles.length === 1) {
            newEntry = {
                title: currentTitles[0].value,
                content: currentEntries[0].value,
                date: currentDates[0].innerText,
            };
        } else {
            newEntry = {
                title: currentTitles[0].value,
                content: currentEntries[0].value,
                date: currentDates[0].innerText,
            };
        }
    
        console.log(newEntry)
    
        Entries.push(newEntry);
    
        localStorage.setItem('Entries', JSON.stringify(Entries));

}

//I need to add something to render all the previously saved ones- or at least only render the ones you scroll to.
//So... this has to be with the buttons right? Wonder if I need a global page tracker

function nextPage() {
    //Pull entries / check length
    Entries = localStorage.getItem("Entries");
    // if (Entries_temp) {
    //     Entries = JSON.parse(Entries_temp);
    //     console.log(Entries)
    // }
    Entries = JSON.parse(Entries) || [];

    //If no entries, you can't click
    if (Entries.length === 0) {
        // console.log("here?")
        return;
    }

    //If you reach max pages, reset to 0

    let newPage = document.querySelector(".journal_Open");
    let newPage2 = document.querySelector(".journal_Open2");

    clearcontent('.journal_Open');
    clearcontent('.journal_Open2');

    //Need to know what page we're currently on. I seriously think I should start a global tracker
    currentPage = (currentPage + 1) % Entries.length; //This makes it 1 % 1... oh...
    console.log(currentPage);
    console.log("Current entry: " + Entries[currentPage].title);

    if (currentPage >= Entries.length) {
        currentPage = 0;
    }

    //I'm just adding an edge case. Fuck it.
    if (currentPage === 0 && Entries.length === 1) {
        document.querySelector('.journal_Cover').style.display = "none";
        document.querySelector('.journal_Open').style.display = "block";
        document.querySelector('.journal_Open2').style.display = "block";
        let currentEntry = 0;
        // console.log("Current entry: " + currentEntry);
        
        //Creating journal_Open / Entries[currentEntry - 1]
        // console.log(Entries[currentEntry - 1]);
        
        //Create date element (can't be adjusted)
        let date_el = document.createElement('p');
        date_el.setAttribute("class", "date");
        date_el.innerText = Entries[currentEntry].date;

        //Create title element (can be adjusted)
        let inputBox = document.createElement('div');
        inputBox.setAttribute("class", "input_box");

        let titleInput = document.createElement('input');
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("class", "title");
        titleInput.setAttribute("placeholder", "Title");
        titleInput.value = Entries[currentEntry].title;

        //Create entry (can be adjusted)
        let EntryInput = document.createElement('textarea');
        EntryInput.setAttribute("class", "entry");
        EntryInput.setAttribute("name", "Entry");
        // EntryInput.setAttribute("cols", "60");
        // EntryInput.setAttribute("rows", "22");
        EntryInput.value = Entries[currentEntry].content;


        //Create save btn (I think this is necessary)
        let saveJournalBtn = document.createElement('button');
        saveJournalBtn.setAttribute("class", "journalSave");
        saveJournalBtn.setAttribute("onclick", "saveEntry()");
        saveJournalBtn.innerText = "Save"

        //In order to know what page I'm adding to: Divide entry length (total entries) by 2.
            //If even, add to journal_Open
            //If odd, add to journal_Open2
        
        newPage.appendChild(date_el);
        inputBox.appendChild(titleInput);
        newPage.appendChild(inputBox);
        newPage.appendChild(EntryInput);
        newPage.appendChild(saveJournalBtn);
        setTheme(theme);
        return;
    }

    //So... wow. Ok this song is magic- so I need to turn journal_cover off and turn the other two on
    if (currentPage !== 0) {
        document.querySelector('.journal_Cover').style.display = "none";
        document.querySelector('.journal_Open').style.display = "block";
        document.querySelector('.journal_Open2').style.display = "block";
    } else {
        document.querySelector('.journal_Cover').style.display = "block";
        document.querySelector('.journal_Open').style.display = "none";
        document.querySelector('.journal_Open2').style.display = "none";
    }

    //Now I have to render. Which means grabbing the current page and the one previous to it from Entries and rendering them
    //Rendering the one on journal_Open (there's always one here I think- this would be currentPage-1)
        //Pages have no element so... need to create the elements again
    
    let currentEntry = (currentPage * 2) - 1;
    // console.log("Current entry: " + currentEntry);
    
    //Creating journal_Open / Entries[currentEntry - 1]
    // console.log(Entries[currentEntry - 1]);
    
    //Create date element (can't be adjusted)
    let date_el = document.createElement('p');
    date_el.setAttribute("class", "date");
    date_el.innerText = Entries[currentEntry - 1].date;

    //Create title element (can be adjusted)
    let inputBox = document.createElement('div');
    inputBox.setAttribute("class", "input_box");

    let titleInput = document.createElement('input');
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("class", "title");
    titleInput.setAttribute("placeholder", "Title");
    titleInput.value = Entries[currentEntry - 1].title;

    //Create entry (can be adjusted)
    let EntryInput = document.createElement('textarea');
    EntryInput.setAttribute("class", "entry");
    EntryInput.setAttribute("name", "Entry");
    // EntryInput.setAttribute("cols", "60");
    // EntryInput.setAttribute("rows", "22");
    EntryInput.value = Entries[currentEntry - 1].content;


    //Create save btn (I think this is necessary)
    let saveJournalBtn = document.createElement('button');
    saveJournalBtn.setAttribute("class", "journalSave");
    saveJournalBtn.setAttribute("onclick", "saveEntry()");
    saveJournalBtn.innerText = "Save"

    //In order to know what page I'm adding to: Divide entry length (total entries) by 2.
        //If even, add to journal_Open
        //If odd, add to journal_Open2
    
    newPage.appendChild(date_el);
    inputBox.appendChild(titleInput);
    newPage.appendChild(inputBox);
    newPage.appendChild(EntryInput);
    newPage.appendChild(saveJournalBtn);
    setTheme(theme);



    //Doing it again for the journal_Open2 (assuming that there's another option)
    //It kinda- it throws an error but doesn't break the page...
    if (Entries.length >= 2 && newPage2.innerHTML.trim() === '') {
        console.log("Current entry2: " + currentEntry);

        // Something to check if there's an entry to go there
        // Creating journal_Open / Entries[currentEntry - 1]
        console.log(Entries[currentEntry - 1]);
        
        // Create date element (can't be adjusted)
        let date_el2 = document.createElement('p');
        date_el2.setAttribute("class", "date");
        date_el2.innerText = Entries[currentEntry].date;

        //Create title element (can be adjusted)
        let inputBox2 = document.createElement('div');
        inputBox2.setAttribute("class", "input_box");

        let titleInput2 = document.createElement('input');
        titleInput2.setAttribute("type", "text");
        titleInput2.setAttribute("class", "title");
        titleInput2.setAttribute("placeholder", "Title");
        titleInput2.value = Entries[currentEntry].title;

        //Create entry (can be adjusted)
        let EntryInput2 = document.createElement('textarea');
        EntryInput2.setAttribute("class", "entry");
        EntryInput2.setAttribute("name", "Entry");
        // EntryInput2.setAttribute("cols", "60");
        // EntryInput2.setAttribute("rows", "22");
        EntryInput2.value = Entries[currentEntry].content;


        //Create save btn (I think this is necessary)
        let saveJournalBtn2 = document.createElement('button');
        saveJournalBtn2.setAttribute("class", "journalSave");
        saveJournalBtn2.setAttribute("onclick", "saveEntry()");
        saveJournalBtn2.innerText = "Save"

        //In order to know what page I'm adding to: Divide entry length (total entries) by 2.
            //If even, add to journal_Open
            //If odd, add to journal_Open2
        
        newPage2.appendChild(date_el2);
        inputBox2.appendChild(titleInput2);
        newPage2.appendChild(inputBox2);
        newPage2.appendChild(EntryInput2);
        newPage2.appendChild(saveJournalBtn2);
        
        setTheme(theme);
    
    }

}

function prevPage() {
    //If no entries, you can't click
    if (Entries.length === 0) {
        return;
    }

    let newPage = document.querySelector(".journal_Open");
    let newPage2 = document.querySelector(".journal_Open2");

    clearcontent('.journal_Open');
    clearcontent('.journal_Open2');

    currentPage = (currentPage - 1 + Entries.length) % Entries.length;

    if (currentPage !== 0) {
        document.querySelector('.journal_Cover').style.display = "none";
        document.querySelector('.journal_Open').style.display = "block";
        document.querySelector('.journal_Open2').style.display = "block";
    } else {
        document.querySelector('.journal_Cover').style.display = "block";
        document.querySelector('.journal_Open').style.display = "none";
        document.querySelector('.journal_Open2').style.display = "none";
        //Need to clear and load the previous values... no sleep never any sleep only code
    }

    //Now I have to render. Which means grabbing the current page and the one previous to it from Entries and rendering them
    //Rendering the one on journal_Open (there's always one here I think- this would be currentPage-1)
        //Pages have no element so... need to create the elements again
    
        let currentEntry = (currentPage * 2) - 1;
        // console.log("Current entry: " + currentEntry);
        
        //Creating journal_Open / Entries[currentEntry - 1]
        // console.log(Entries[currentEntry - 1]);
        
        //Create date element (can't be adjusted)
        let date_el = document.createElement('p');
        date_el.setAttribute("class", "date");
        date_el.innerText = Entries[currentEntry - 1].date;
    
        //Create title element (can be adjusted)
        let inputBox = document.createElement('div');
        inputBox.setAttribute("class", "input_box");
    
        let titleInput = document.createElement('input');
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("class", "title");
        titleInput.setAttribute("placeholder", "Title");
        titleInput.value = Entries[currentEntry - 1].title;
    
        //Create entry (can be adjusted)
        let EntryInput = document.createElement('textarea');
        EntryInput.setAttribute("class", "entry");
        EntryInput.setAttribute("name", "Entry");
        // EntryInput.setAttribute("cols", "60");
        // EntryInput.setAttribute("rows", "22");
        EntryInput.value = Entries[currentEntry - 1].content;
    
    
        //Create save btn (I think this is necessary)
        let saveJournalBtn = document.createElement('button');
        saveJournalBtn.setAttribute("class", "journalSave");
        saveJournalBtn.setAttribute("onclick", "saveEntry()");
        saveJournalBtn.innerText = "Save"
    
        //In order to know what page I'm adding to: Divide entry length (total entries) by 2.
            //If even, add to journal_Open
            //If odd, add to journal_Open2
        
        newPage.appendChild(date_el);
        inputBox.appendChild(titleInput);
        newPage.appendChild(inputBox);
        newPage.appendChild(EntryInput);
        newPage.appendChild(saveJournalBtn);

        setTheme(theme);
    
    
        //Doing it again for the journal_Open2 (assuming that there's another option)
        //It kinda- it throws an error but doesn't break the page...
        if (Entries.length >= 2 && newPage2.innerHTML.trim() === '') {
            console.log("Current entry2: " + currentEntry);
    
            // Something to check if there's an entry to go there
            // Creating journal_Open / Entries[currentEntry - 1]
            console.log(Entries[currentEntry - 1]);
            
            // Create date element (can't be adjusted)
            let date_el2 = document.createElement('p');
            date_el2.setAttribute("class", "date");
            date_el2.innerText = Entries[currentEntry].date;
    
            //Create title element (can be adjusted)
            let inputBox2 = document.createElement('div');
            inputBox2.setAttribute("class", "input_box");
    
            let titleInput2 = document.createElement('input');
            titleInput2.setAttribute("type", "text");
            titleInput2.setAttribute("class", "title");
            titleInput2.setAttribute("placeholder", "Title");
            titleInput2.value = Entries[currentEntry].title;
    
            //Create entry (can be adjusted)
            let EntryInput2 = document.createElement('textarea');
            EntryInput2.setAttribute("class", "entry");
            EntryInput2.setAttribute("name", "Entry");
            // EntryInput2.setAttribute("cols", "60");
            // EntryInput2.setAttribute("rows", "22");
            EntryInput2.value = Entries[currentEntry].content;
    
    
            //Create save btn (I think this is necessary)
            let saveJournalBtn2 = document.createElement('button');
            saveJournalBtn2.setAttribute("class", "journalSave");
            saveJournalBtn2.setAttribute("onclick", "saveEntry()");
            saveJournalBtn2.innerText = "Save"
    
            //In order to know what page I'm adding to: Divide entry length (total entries) by 2.
                //If even, add to journal_Open
                //If odd, add to journal_Open2
            
            newPage2.appendChild(date_el2);
            inputBox2.appendChild(titleInput2);
            newPage2.appendChild(inputBox2);
            newPage2.appendChild(EntryInput2);
            newPage2.appendChild(saveJournalBtn2);
        
        }

    setTheme(theme);
}

//Something for the setting toggle
let setting = document.querySelector("#setting");
let settings = document.querySelector(".settingToggle");

setting.addEventListener('click', () => {
    // console.log("Fuck you")
if (settings.style.display === 'none' || settings.style.display === '') {
    settings.style.display = 'block';
} else {
    settings.style.display = 'none';
}
});

//Changes theme when clicked in dropdown menu
document.getElementById("theme2").addEventListener("change", function() {
    theme = this.value;
    setTheme(theme);
});

function saveChanges() {
    //Has to... get the value of theme and name, update them in local storage, then run setTheme()
    //Get the selected option and name, and store in local storage
    let enteredName = document.getElementById("newName").value;
    console.log(enteredName);
    if (enteredName !== '') {
        localStorage.setItem('Name', JSON.stringify(enteredName));
    }

    localStorage.setItem('Theme', JSON.stringify(theme));

    alert('Your preferred settings have been saved.');
}