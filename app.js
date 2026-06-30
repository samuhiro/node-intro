const time = Number(process.argv[2]);

if (time >= 5 && time <= 13) {
    console.log("Buongiorno!");
}
else if (time > 13 && time <= 21) {
    console.log("Buonasera!");
}
else
    console.log("Buonanotte!");
