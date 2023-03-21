function alarmClock() {
    const searchBody = document.querySelector(".col__article");

    const createDivClock = document.createElement("div");
    createDivClock.setAttribute("class", 'divClock');
    searchBody.append(createDivClock);

    const searchDivClock = document.querySelector(".divClock");

    const createClock = document.createElement("h1");
    createClock.setAttribute("class", 'h1Clock');
    createClock.innerHTML = "00:00:00";
    searchDivClock.append(createClock);

    const createDivContent = document.createElement("div");
    createDivContent.setAttribute("class", 'content');
    searchDivClock.append(createDivContent);

    const searchDivContent = document.querySelector(".content");

    // Add Hours
    const createDivColumnHour = document.createElement("div");
    createDivColumnHour.setAttribute("class", 'columnHour');
    searchDivContent.append(createDivColumnHour);

    const searchDivColumnHour = document.querySelector(".columnHour");

    const createSelectHour = document.createElement("select");
    createSelectHour.setAttribute("class", 'selectHour');
    searchDivColumnHour.append(createSelectHour);

    const searchSelrctHour = document.querySelector(".selectHour");

    const createOptionHour = document.createElement("option");
    createOptionHour.setAttribute("class", 'optionHour');
    createOptionHour.setAttribute("value", 'Hour');
    createOptionHour.setAttribute("selected", "");
    createOptionHour.setAttribute("hidden", "");
    createOptionHour.innerHTML = "Hour";
    searchSelrctHour.append(createOptionHour);

    for (let i = 0; i < 24; i++) {
        if (i < 10) { i = '0' + i; }
        const createOptionHour2 = document.createElement("option");
        createOptionHour2.setAttribute("class", 'optionHour');
        createOptionHour2.setAttribute("value", i);
        createOptionHour2.innerHTML = i;
        searchSelrctHour.append(createOptionHour2);
    }

    // Add minutes
    const createDivColumnMinute = document.createElement("div");
    createDivColumnMinute.setAttribute("class", 'columnMinute');
    searchDivContent.append(createDivColumnMinute);

    const searchDivColumnMinute = document.querySelector(".columnMinute");

    const createSelectMinute = document.createElement("select");
    createSelectMinute.setAttribute("class", 'selectMinute');
    searchDivColumnMinute.append(createSelectMinute);

    const searchSelrctMinute = document.querySelector(".selectMinute");

    const createOptionMinute = document.createElement("option");
    createOptionMinute.setAttribute("class", 'optionMinute');
    createOptionMinute.setAttribute("value", 'Minute');
    createOptionMinute.setAttribute("selected", "");
    createOptionMinute.setAttribute("hidden", "");
    createOptionMinute.innerHTML = "Minute";
    searchSelrctMinute.append(createOptionMinute);

    for (let i = 0; i < 60; i++) {
        if (i < 10) { i = '0' + i; }
        const createOptionMinute2 = document.createElement("option");
        createOptionMinute2.setAttribute("class", 'optionMinute');
        createOptionMinute2.setAttribute("value", i);
        createOptionMinute2.innerHTML = i;
        searchSelrctMinute.append(createOptionMinute2);
    }

    // Add button
    const createSetAlarm = document.createElement("button");
    createSetAlarm.setAttribute("class", 'buttonSetAlarm');
    createSetAlarm.innerHTML = "Set Alarm";
    searchDivClock.append(createSetAlarm);


    const searchH1Clock = document.querySelector(".h1Clock");
    let alarmTime;
    let ringtone = new Audio("files/alarm_clock/Relaxing_Alarm_Sky.mp3");
    let isAlarmSet = false;

    setInterval(() => {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;

        searchH1Clock.innerHTML = `${h}:${m}:${s}`;

        if (alarmTime == `${h}:${m}`) {
            ringtone.play();
            ringtone.loop = true;
        }


    }, 500);


    const searcButtonSetAlarm = document.querySelector(".buttonSetAlarm");

    function setAlarm() {
        if (isAlarmSet) {
            alarmTime = "";
            ringtone.pause();
            searchDivContent.classList.remove("disable");
            searcButtonSetAlarm.classList.remove("pressed");
            searcButtonSetAlarm.innerText = "Set Alarm";
            return isAlarmSet = false;
        }


        let time = `${searchSelrctHour.value}:${searchSelrctMinute.value}`;

        if (time.includes("Hour") || time.includes("Minute")) {
            return alert("Please, select a valid time to set Alarm!");
        }
        isAlarmSet = true;
        alarmTime = time;
        searchDivContent.classList.add("disable");
        searcButtonSetAlarm.classList.add("pressed");
        searcButtonSetAlarm.innerText = "Clear Alarm";
    }


    searcButtonSetAlarm.addEventListener("click", setAlarm);


}

///////////////////////////////// optional part ///////////////////////////////////////////
function cssAndDesc() {
    const style = `
    .h1Clock {
        color: #000;
        font-size: 48px;
        font-weight: 500;
        margin: 0px 0px 30px 0px;
    }
    .divClock {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #4a98f7;
        width: 340px;
        border-radius: 10px;
        padding: 30px;
        flex-direction: column;
    }

    .divClock .content.disable {
        opacity: 0.6;
        pointer-events: none;
    }

    .content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background: #eee;
        border-radius: 5px;
    }

    .columnHour, .columnMinute {
        border-radius: 5px;
        border: 0px solid #999;
        width: 50% - 5px;
        padding: 0 10px;
    }

    .selectHour, .selectMinute {
        outline: none;
        border: none;
        height: 53px;
        width: 100%;
        font-size: 19px;
    }

    .buttonSetAlarm {
        width: 100%;
        outline: none;
        border: none;
        color: #fff;
        margin-top: 20px;
        font-size: 20px;
        padding: 17px 0;
        border-radius: 5px;
        background: #54d149;
        cursor: pointer;
    }

    .pressed {
        background: #d1bd49;
    }

 `;

    const description = 'The simplest alarm clock script <a href="" target=_blanc></a>';

    addCssAndDescription(style, description);
}
cssAndDesc();
alarmClock();



