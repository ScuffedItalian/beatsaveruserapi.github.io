//HTML Stuff lol
const button = document.getElementById("enterButton");
const idstat = document.getElementById("userIDStat")
const namestat = document.getElementById("userNameStat")
const hashstat = document.getElementById("userHashStat")
const avatarstat = document.getElementById("userAvatarStat")
const adminstat = document.getElementById("userAdminStat")
const curstat = document.getElementById("userCuratorStat")
//Metadata
const bpm = document.getElementById("bpm");
const dur = document.getElementById("dur");
const songname = document.getElementById("songname");
const lan = document.getElementById("LAN");
const san = document.getElementById("SAN")



//Data management


button.addEventListener("click", async () => {

    const website = await fetch("https://api.beatsaver.com/search/text/0?noodle=true&sortOrder=Latest");
    const response = website;
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.docs.length);


    const randomObject = data.docs[randomIndex];
    const { metadata, stats, uploader } = randomObject;

    console.log(metadata.songName); // Example: "Believer"
    console.log(stats.downloads); // Example: 123456

    //Uploader stats
    idstat.textContent = uploader.id;
    namestat.textContent = uploader.name;
    hashstat.textContent = uploader.hash;
    avatarstat.textContent = uploader.avatar;
    curstat.textContent = uploader.curator;

    //metadata stats
    bpm.textContent = metadata.bpm;
    dur.textContent = metadata.duration;
    songname.textContent = metadata.songName;
    lan.textContent = metadata.levelAuthorName;
    san.textContent = metadata.songAuthorName;
})





