const lines = [
    "hii this is me hi",
    "test test test"
];

console.log("  running on " + process.platform);

for (const line of lines) {
    await Bun.sleep(400);
    console.log(`  ${line}`);
}

console.log("  done. thats it.");
