function showCurrentTime(){
    const now=new Date();

    const year=now.getFullYear();
    const month=now.getMonth()+1;
    const day=now.getDate();
    const hour=now.getHours();
    const minute=now.getMinutes();
    const seconds=now.getSeconds();

    document.getElementById('year').textContent=year;
    document.getElementById('month').textContent=month.toString().padStart(2,"0");
    document.getElementById('day').textContent=day.toString().padStart(2,"0");
    document.getElementById('hour').textContent=hour.toString().padStart(2,"0");
    document.getElementById('minute').textContent=minute.toString().padStart(2,"0");
    document.getElementById('second').textContent=seconds.toString().padStart(2,"0");
}
setInterval(showCurrentTime, 1000);